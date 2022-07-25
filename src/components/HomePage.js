import React from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => (
  <div className="homePageContainer">
    <div className="searchContainer">
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
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
