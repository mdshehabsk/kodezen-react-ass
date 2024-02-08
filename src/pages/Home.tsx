import { useContext, useEffect, useState } from "react";
import CourseContext, {
  ICourseContextType,
} from "../store/context/CourseContext";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import CheckBox from "../components/CheckBox";
import CheckboxContext, { ICheckboxContextType } from "../store/context/CheckBoxContext";

const Home = () => {
  const [showCheckBox,setShowCheckBox] = useState(false)
  const hamburgerClick = () => {
    setShowCheckBox(true)
  }
  const { state } = useContext(CourseContext) as ICourseContextType;
  const {state : checkboxItem} = useContext(CheckboxContext) as ICheckboxContextType

  const head = checkboxItem.filter(item => item.checked).map(item => item.name)
  const courses = state.map(item => ({
    id: item.id,
    value: item.value.filter(subItem => head.includes(subItem.name))
  }));
  return (
    <>
      <div className="table-container">
 <Navbar hamburgerClick={hamburgerClick}/>
 <CheckBox showCheckBox={showCheckBox} setShowCheckBox={setShowCheckBox} />
        <div className="table">
          <div className="row header" style={{gridTemplateColumns: ` repeat(${head.length},1fr)`}}>
            {head.map((h,i) => (
              <div key={i} className="cell"  >
                <b> {h} </b>
              </div>
            ))}
          </div>

          {courses.map((course, i) => (
            <Course course={course} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
