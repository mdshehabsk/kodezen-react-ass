import React, { FC, useContext } from "react";
import styles from "../styles/checkbox.module.css";
import CheckboxContext from "../store/context/CourseFilterContext";
import { CheckboxActionKind } from "../store/actions/CourseFilterAction";


// types import

import { ICourseFilter } from "../store/context/CourseFilterContext";


//define props type
type Tprops = {
  showCheckBox: boolean;
  setShowCheckBox: any;
};



const CheckBox: FC<Tprops> = ({ showCheckBox, setShowCheckBox }) => {
  const {state,dispatch} = useContext(CheckboxContext) as ICourseFilter
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
