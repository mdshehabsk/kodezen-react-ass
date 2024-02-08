import React, { FC, useContext } from "react";
import styles from "../styles/checkbox.module.css";
import CheckboxContext, { ICheckboxContextType } from "../store/context/CheckBoxContext";
import { CheckboxActionKind } from "../store/actions/CheckboxAction";

type Tprops = {
  showCheckBox: boolean;
  setShowCheckBox: any;
};



const CheckBox: FC<Tprops> = ({ showCheckBox, setShowCheckBox }) => {
  const {state,dispatch} = useContext(CheckboxContext) as ICheckboxContextType
 const checkboxClick = (event:React.ChangeEvent<HTMLInputElement>) => {
  const checked = event.target.checked
  const name = event.target.value
  dispatch({
    type: CheckboxActionKind.CHANGE_CHECKED,
    payload:{
      name,
      checked
    }
  })
  
 }
  return (
    <>
      <div
        className={`${showCheckBox && styles.checkbox_wrapper}`}
        onClick={() => setShowCheckBox(false)}
      >
       
      </div>
      <div
        className={`${styles.checkbox}  ${
          showCheckBox ? styles.active : null
        } `}
      >
        {
          state.map((checkboxItem,i) =>   <div key={i} className={styles.checkbox_item}>
            <label className={styles.container}>
              {checkboxItem?.name}
              <input type="checkbox" value={checkboxItem?.name}  checked={checkboxItem?.checked} onChange={checkboxClick} />
              <span className={styles.checkmark}></span>
            </label>
          </div> )
        }
      </div>
    </>
  );
};

export default CheckBox;
