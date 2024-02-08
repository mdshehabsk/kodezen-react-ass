import { CourseItem } from "../../utils/types/CourseType"
import {CourseAction,CourseActionKind} from "../actions/CourseAction"


const CourseReducer = (state: CourseItem[],action: CourseAction) => {
    switch(action.type){
        case CourseActionKind.DELETE_COURSE:
        const courseId = action.payload.id;

        const newstata = state.filter(course => course.id !== courseId)
        return newstata
        default:
            return state
    }
}

export default CourseReducer