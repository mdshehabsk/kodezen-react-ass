
import React, { useContext } from "react";
import { CourseItem } from "../utils/types/CourseType";
import CourseContext from "../store/context/CourseContext";
import { CourseActionKind } from "../store/actions/CourseAction";
import styles from "../styles/course.module.css";

// types import
import { ICourseContextType } from "../store/context/CourseContext";


//define props type
type Iprops = {
  course: CourseItem;
};

const Course: React.FC<Iprops> = ({ course }) => {
  const { dispatch } = useContext(CourseContext) as ICourseContextType;

  // delete every course based on their id
  const deleteCourse = (id: number) => {
    console.log(id);
    dispatch({
      type: CourseActionKind.DELETE_COURSE,
      payload: {
        id,
      },
    });
  };

  return (
    <div
      className={`row ${styles.body}`}
      style={{ gridTemplateColumns: ` repeat(${course.value.length},1fr)` }}
    >
      {course?.value.map((courseValue, i) => (
        <React.Fragment key={i}>
          {courseValue.name === "Status" && Array.isArray(courseValue.value) ? (
            <div className={`${styles.cell} ${styles.selects} `}>
              <b> {courseValue.name} </b>
              <select>
                {courseValue.value.map((selectsOption, i) => (
                  <option key={i} value={selectsOption}>
                   
                    {selectsOption}
                  </option>
                ))}
              </select>
            </div>
          ) : courseValue.name === "Action" &&
            Array.isArray(courseValue.value) ? (
              // showing action sell based on some condition
            <div className={`${styles.cell} ${styles.btns} `}>
              {courseValue.value.map((action, i) => (
                <button key={i} onClick={() => deleteCourse(course.id)}>
                  
                  {action}
                </button>
              ))}
            </div>
          ) : (
            <div className={`${styles.cell}  `}>
              <b> {courseValue.name} </b>
              <p> {courseValue.value} </p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Course;
