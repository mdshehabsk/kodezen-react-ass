import { ICheckbox } from "../../utils/types/CourseFilterType";
import { CheckboxAction, CheckboxActionKind } from "../actions/CourseFilterAction";

const CourseFilterReducer = (state: ICheckbox[], action: CheckboxAction) => {
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

export default CourseFilterReducer;
