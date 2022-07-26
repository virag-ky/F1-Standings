import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { season, currentYear } = props;

  return (
    <div className="navbarContainer">
      <nav>
        <div className="goBackBtn">
          <NavLink to="/">Go Back</NavLink>
          <span>{!season ? { currentYear } : season}</span>
        </div>
        <span>F1 Standings</span>
        <div>
          <i>X</i>
          <i>Y</i>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  season: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
};

export default Navbar;
