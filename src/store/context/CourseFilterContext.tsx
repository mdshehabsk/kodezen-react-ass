import { createContext } from "react";
import { ICheckbox } from "../../utils/types/CourseFilterType";
import { CheckboxAction } from "../actions/CourseFilterAction";


export interface ICourseFilter {
    state : ICheckbox[],
    dispatch : React.Dispatch<CheckboxAction> 
}


const CourseFilterContext = createContext<ICourseFilter | null>(null)

export default CourseFilterContext