import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <div className="homePageContainer">
    <div className="yearOfStandingsContainer">
      <img alt="race track" />
      <div>
        <h2>2022 Standings</h2>
        <span>23 races</span>
      </div>
    </div>
    <div className="standingsContainer">
      <div className="driversContainer">
        <NavLink to="drivers">next</NavLink>
        <h3>Drivers</h3>
      </div>
      <div className="constructorsContainer">
        <NavLink to="constructors">next</NavLink>
        <h3>Constructors</h3>
      </div>
    </div>
  </div>
);

export default HomePage;
