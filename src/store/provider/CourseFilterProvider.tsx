import { useReducer } from "react"
import { ICheckbox } from "../../utils/types/CourseFilterType"
import CheckboxContext from "../context/CourseFilterContext"
import CheckboxReducer from "../reducer/CourseFilterReducer"

export const initialState : ICheckbox []  = [
    {
      name: 'Title',
      checked:true
    },
    {
      name: 'Categories',
      checked:true
    },
    {
      name: 'Date',
      checked:true
    },
    {
      name:'Price',
      checked:true
    },
    {
      name:'Author',
      checked:true
    },
    {
      name:'Status',
      checked:true
    },
    {
      name:'Action',
      checked:true
    }
  ]



const CourseFilterProvider : React.FC<{children:JSX.Element}> = ({children}) => {
    const [state,dispatch] = useReducer(CheckboxReducer,initialState)
    return <CheckboxContext.Provider value={{state,dispatch}} >
        {children}
    </CheckboxContext.Provider>
}

export default CourseFilterProvider