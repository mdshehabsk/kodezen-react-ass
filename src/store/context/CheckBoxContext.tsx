import { createContext } from "react";
import { ICheckbox } from "../../utils/types/CheckboxType";
import { CheckboxAction } from "../actions/CheckboxAction";


export interface ICheckboxContextType {
    state : ICheckbox[],
    dispatch : React.Dispatch<CheckboxAction> 
}


const CheckboxContext = createContext<ICheckboxContextType | null>(null)

export default CheckboxContext