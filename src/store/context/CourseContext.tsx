
import { createContext } from "react";

import { CourseItem } from "../../utils/types/CourseType";
import { CourseAction } from "../actions/CourseAction";




export interface ICourseContextType {
    state : CourseItem[],
    dispatch : React.Dispatch<CourseAction> 
}


const CourseContext = createContext<ICourseContextType | null >(null)


export default CourseContext