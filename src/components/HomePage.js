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
import '../styles/homepage.css';
import racecar from '../images/racecar.jpg';

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
      <div className="headLine">
        <p>
          Formula 1 racing began in 1950 and is the world&apos;s most
          prestigious motor racing competition.
        </p>
        <br />
        <p>
          This web application displays data of the current and past standings
          in the championships, both driver&apos;s and constructor&apos;s. Type
          a year (from 1950) in the search field to get the standings.
        </p>
      </div>
      <div className="searchContainer">
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 300,
            height: 35,
          }}
        >
          <NumberFormat
            format="####"
            placeholder="Search by year, e.g. 1985"
            value={year}
            onChange={changeSeason}
            onKeyDown={changeOnEnter}
            className="search"
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
      <div className="mainContainer">
        <div className="yearOfStandingsContainer">
          <div className="imageContainer">
            <img src={racecar} alt="formula 1 car" className="racecar" />
            <div className="mask" />
          </div>
          <div className="standingsYear">
            <h2>
              <span className="year">{!season ? { currentYear } : season}</span>
              STANDINGS
            </h2>
            <span className="races">
              {races}
              {' '}
              Races
            </span>
          </div>
        </div>
        <div className="standingsContainer">
          <div className="driversContainer standings">
            <NavLink to="drivers">
              <ArrowCircleRightOutlinedIcon />
            </NavLink>
            <h3>DRIVERS</h3>
            <div className="standingsMask1" />
          </div>
          <div className="constructorsContainer standings">
            <NavLink to="constructors">
              <ArrowCircleRightOutlinedIcon />
            </NavLink>
            <h3>CONSTRUCTORS</h3>
            <div className="standingsMask" />
          </div>
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
