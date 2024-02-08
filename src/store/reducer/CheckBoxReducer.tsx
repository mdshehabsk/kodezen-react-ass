import { ICheckbox } from "../../utils/types/CheckboxType";
import { CheckboxAction, CheckboxActionKind } from "../actions/CheckboxAction";

const CheckboxReducer = (state: ICheckbox[], action: CheckboxAction) => {
  switch (action.type) {
    case CheckboxActionKind.CHANGE_CHECKED:
      const name = action.payload.name;
      const checked = action.payload.checked;
      console.log(name,checked)
      return state.map((checkboxItem) => {
        if (checkboxItem.name === name) {
          return {
            name,
            checked,
          };
        } 
        return checkboxItem;
      });

    default:
      return state;
  }
};

export default CheckboxReducer;
