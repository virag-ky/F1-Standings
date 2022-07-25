import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { fetchSeason } from '../redux/homepage/homepage';

const HomePage = () => {
  const [year, setYear] = useState('');
  const season = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleEvent = () => {
    dispatch(fetchSeason(year));
    setYear('');
  };

  const changeOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchSeason(year));
      setYear('');
    }
  };

  const changeSeason = (e) => {
    setYear(e.target.value);
  };

  return (
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
            placeholder="Search by year, e.g. 1985"
            inputProps={{ 'aria-label': 'search by year' }}
            value={year}
            onChange={changeSeason}
            onKeyDown={changeOnEnter}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleEvent}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="yearOfStandingsContainer">
        <div>
          <h2>
            <span>{!season ? '2022' : season}</span>
            Standings
          </h2>
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
};

export default HomePage;
