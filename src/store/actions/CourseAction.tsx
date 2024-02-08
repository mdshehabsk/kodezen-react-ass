
// export const ADD_COURSE = 'ADD_COURSE'
// export const EDIT_COURSE = 'EDIT_COURSE'


export enum CourseActionKind  {
    ADD_COURSE = 'ADD_COURSE',
    EDIT_COURSE = 'EDIT_COURSE',
    DELETE_COURSE = 'DELETE_COURSE'
}
export interface CourseAction  {
    type: CourseActionKind,
    payload: any
}
