

export enum CheckboxActionKind  {
    CHANGE_CHECKED = 'CHANGE_CHECKED'
}
export interface CheckboxAction  {
    type: CheckboxActionKind,
    payload: {
        name:string,
        checked:boolean
    }
}
