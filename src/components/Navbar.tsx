import { FC } from "react";
import styles from '../styles/navbar.module.css'

// define props type
type Tprops = {
  hamburgerClick : () => void
}

const Navbar : FC<Tprops> = ({hamburgerClick}) => {
  return (
    <div className={styles.navbar} >
      <div className={styles.logo}   >
        <h3> Course List </h3>
      </div>
      <div className={styles.right} >
        {/* <div>
          <button>Add new course</button>
        </div> */}
        <div className={styles.hamburger} onClick={hamburgerClick}  >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
