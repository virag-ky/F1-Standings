import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbarContainer">
    <nav>
      <div className="goBackBtn">
        <NavLink to="/">Go Back</NavLink>
        <span>2022</span>
      </div>
      <span>F1 Standings</span>
      <div>
        <i>X</i>
        <i>Y</i>
      </div>
    </nav>
  </div>
);

export default Navbar;
