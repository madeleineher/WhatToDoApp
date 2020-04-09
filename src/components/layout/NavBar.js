import React from "react";
import NavImg from "../../images/toDoAppNavBar.png";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav_image'>
        <img src={NavImg} alt='' />
      </div>
    </div>
  );
};

export default NavBar;
