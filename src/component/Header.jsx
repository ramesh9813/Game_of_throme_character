import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/header.css';

const Header = () => {
  return (
    <div className="main-container">
      <ul className='ul'>
        {/* work on the navlink portion */}
        
        {/* <NavLink to={"/"} style={{textDecoration: "none", color: "#fff"}}><li>Home</li></NavLink> */}
        {/* <NavLink to={"/charcters"} style={{textDecoration: "none", color: "#fff"}}><li>characters</li></NavLink> */}
        
      </ul>
    </div>
  );
};

export default Header;
