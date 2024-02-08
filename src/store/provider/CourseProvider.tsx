import React, { useReducer } from "react";
import CourseContext from "../context/CourseContext";
import CourseReducer from "../reducer/CourseReducer";

import { CourseItem } from "../../utils/types/CourseType";
type Props = {
  children: JSX.Element;
};
// Create a new Date object which represents the current date and time
let currentDate = new Date();

// Extract the hours, minutes, and AM/PM indicator
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let ampm = hours >= 12 ? "PM" : "AM";

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // Handle midnight (0 hours)

// Extract the date components
let month = currentDate.getMonth() + 1; // Months are zero-based
let day = currentDate.getDate();
let year = currentDate.getFullYear() % 100; // Get last two digits of the year

// Format the date and time string
let formattedDateTime =
  hours +
  ":" +
  (minutes < 10 ? "0" : "") +
  minutes +
  " " +
  ampm +
  " " +
  month +
  "/" +
  day +
  "/" +
  year;

// Display the formatted date and time

export const initialState: CourseItem[] = [
  {
    id: 1,
    value: [
      {
        name: "Title",
        value: "Full stack Web Development",
      },
      {
        name: "Categories",
        value: "Web",
      },
      {
        name: "Date",
        value: formattedDateTime,
      },
      {
        name: "Price",
        value: "200",
      },
      {
        name: "Author",
        value: " SHEHAB ",
      },
      {
        name: "Status",
        value: ["draft", "publish"],
      },
      {
        name: "Action",
        value: ["Delete"],
      },
    ],
  },
  {
    id: 2,
    value: [
      {
        name: "Title",
        value: "Wordpress Web Development",
      },
      {
        name: "Categories",
        value: "Automation",
      },
      {
        name: "Date",
        value: formattedDateTime,
      },
      {
        name: "Price",
        value: "100",
      },
      {
        name: "Author",
        value: " SHEHAB ",
      },
      {
        name: "Status",
        value: ["draft", "publish"],
      },
      {
        name: "Action",
        value: ["Delete"],
      },
    ],
  },
  {
    id: 3,
    value: [
      {
        name: "Title",
        value: "Advanced Machine Learning Techniques",
      },
      {
        name: "Categories",
        value: "Machine Learning",
      },
      {
        name: "Date",
        value: formattedDateTime,
      },
      {
        name: "Price",
        value: "250",
      },
      {
        name: "Author",
        value: "John Doe",
      },
      {
        name: "Status",
        value: ["draft", "publish"],
      },
      {
        name: "Action",
        value: ["Delete"],
      },
    ],
  },
  {
    id: 4,
    value: [
      {
        name: "Title",
        value: "Data Science Fundamentals",
      },
      {
        name: "Categories",
        value: "Data Science",
      },
      {
        name: "Date",
        value: formattedDateTime,
      },
      {
        name: "Price",
        value: "150",
      },
      {
        name: "Author",
        value: "Jane Smith",
      },
      {
        name: "Status",
        value: ["draft", "publish"],
      },
      {
        name: "Action",
        value: ["Delete"],
      },
    ],
  },
  {
    id: 5,
    value: [
      {
        name: "Title",
        value: "Mobile App Development with React Native",
      },
      {
        name: "Categories",
        value: "Mobile Development",
      },
      {
        name: "Date",
        value: formattedDateTime,
      },
      {
        name: "Price",
        value: "180",
      },
      {
        name: "Author",
        value: "Alex Johnson",
      },
      {
        name: "Status",
        value: ["draft", "publish"],
      },
      {
        name: "Action",
        value: ["Delete"],
      },
    ],
  },
];

const CourseProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(CourseReducer, initialState);
  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
