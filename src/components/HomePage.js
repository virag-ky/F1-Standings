import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { fetchSeason } from '../redux/homepage/homepage';
import { fetchDrivers } from '../redux/drivers/drivers';
import { fetchConstructors } from '../redux/constructors/constructors';
import { fetchRaces } from '../redux/races/races';

const HomePage = (props) => {
  const [year, setYear] = useState('');
  const { season, currentYear } = props;
  const dispatch = useDispatch();
  const races = useSelector((state) => state.race);
  const regex = /(195\d|19[6-9]\d|20[01]\d|202[0-2])/;

  const fetchData = () => {
    dispatch(fetchSeason(year));
    dispatch(fetchDrivers(year));
    dispatch(fetchConstructors(year));
    dispatch(fetchRaces(year));
  };

  const handleEvent = () => {
    fetchData();
    setYear('');
  };

  const changeOnEnter = (e) => {
    if (e.key === 'Enter') {
      if (year.match(regex)) {
        e.preventDefault();
        fetchData();
        setYear('');
      }
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
            width: 300,
          }}
        >
          <NumberFormat
            format="####"
            placeholder="Search by year, e.g. 1985"
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
            <span>{!season ? { currentYear } : season}</span>
            Standings
          </h2>
          <span>
            {races}
            races
          </span>
        </div>
      </div>
      <div className="standingsContainer">
        <div className="driversContainer">
          <NavLink to="drivers">
            <ArrowCircleRightOutlinedIcon />
          </NavLink>
          <h3>Drivers</h3>
        </div>
        <div className="constructorsContainer">
          <NavLink to="constructors">
            <ArrowCircleRightOutlinedIcon />
          </NavLink>
          <h3>Constructors</h3>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  season: PropTypes.string.isRequired,
  currentYear: PropTypes.string.isRequired,
};

export default HomePage;
