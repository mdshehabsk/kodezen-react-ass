import { FC } from "react";

type Tprops = {
  hamburgerClick : () => void
}

const Navbar : FC<Tprops> = ({hamburgerClick}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3> Course List </h3>
      </div>
      <div className="right">
        {/* <div>
          <button>Add new course</button>
        </div> */}
        <div className="hamburger" onClick={hamburgerClick}  >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
