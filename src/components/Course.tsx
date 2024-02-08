import React, { useContext } from 'react';
import { CourseItem } from '../utils/types/CourseType';
import CourseContext, { ICourseContextType } from '../store/context/CourseContext';
import { CourseActionKind } from '../store/actions/CourseAction';

type Iprops = {
  course: CourseItem
}

const Course : React.FC<Iprops>  = ({course}) => {
  const {dispatch} = useContext(CourseContext) as ICourseContextType
  const deleteCourse = (id:number) => {
    console.log(id)
    dispatch({
      type: CourseActionKind.DELETE_COURSE,
      payload:{
        id
      }
    })
  }
  
  return (
    <div className="row body" style={{gridTemplateColumns: ` repeat(${course.value.length},1fr)`}} >
    {course?.value.map((c,i) => (
      <React.Fragment key={i}>
        {c.name === "Status" && Array.isArray(c.value) ? (
          <div className="cell selects">
            <b> {c.name} </b>
            <select>
              {c.value.map((s,i) => (
                <option key={i} value={s}> {s} </option>
              ))}
            </select>
          </div>
        ) : c.name === "Action" && Array.isArray(c.value) ? (
          <div className="cell btns">
           {c.value.map((s,i) => (
                <button key={i}  onClick={()=> deleteCourse(course.id)} > {s} </button>
              ))}
          </div>
        ) : (
          <div className="cell">
            <b> {c.name} </b>
            <p> {c.value} </p>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
      
  );
};

export default Course;
