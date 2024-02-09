import  { FC } from "react";
import styles from "../styles/courseHeader.module.css";
type THeads = {
  heads: string[];
};

const CourseHeader: FC<THeads> = ({ heads }) => {
  return (
    <div
      className={`row ${styles.header}`}
      style={{ gridTemplateColumns: ` repeat(${heads.length},1fr)` }}
    >
      {heads.map((headItem, i) => (
        <div key={i} className={styles.cell}>
          <b> {headItem} </b>
        </div>
      ))}
    </div>
  );
};

export default CourseHeader;
