import { useContext, useState } from "react";
import CourseContext, {
  ICourseContextType,
} from "../store/context/CourseContext";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import CheckBox from "../components/CheckBox";
import CourseHeader from "../components/CourseHeader";
import CourseFilterContext, {
  ICourseFilter,
} from "../store/context/CourseFilterContext";

const Home = () => {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const hamburgerClick = () => {
    setShowCheckBox(true);
  };
  // getting value as a state from courseContext
  const { state } = useContext(CourseContext) as ICourseContextType;

  //get value a checkboxItem from courseFilterContext
  const { state: checkboxItem } = useContext(
    CourseFilterContext
  ) as ICourseFilter;


  
  // get how many default table head i have
  const heads = checkboxItem
    .filter((item) => item.checked)
    .map((item) => item.name);

  // get all courses bassed on input checkbox select
  const courses = state.map((item) => ({
    id: item.id,
    value: item.value.filter((subItem) => heads.includes(subItem.name)),
  }));
  return (
    <>
      <div className="table-container">
        <Navbar hamburgerClick={hamburgerClick} />

        {/* showing popup checkbox when hamburger menu click */}
        <CheckBox
          showCheckBox={showCheckBox}
          setShowCheckBox={setShowCheckBox}
        />
        <div className="table">
          {/* showing CourseHeader in the larget device width = 768px,  */}
          <CourseHeader heads={heads} />

        {/* loop through every course and seding it as a Course Component props */}
          {courses.map((course, i) => (
            <Course course={course} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
