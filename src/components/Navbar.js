import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/navbar.css';

const Navbar = (props) => {
  const { season, currentYear } = props;

  return (
    <div className="navbarContainer">
      <nav>
        <div className="goBackBtn">
          <NavLink to="/">
            <ArrowBackIosIcon />
          </NavLink>

          <span>{!season ? { currentYear } : season}</span>
        </div>
        <span>F1 Standings</span>
        <div>
          <MicIcon />
          <SettingsIcon />
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  season: PropTypes.string.isRequired,
  currentYear: PropTypes.string.isRequired,
};

export default Navbar;
