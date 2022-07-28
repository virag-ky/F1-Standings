const GET_RACES = 'f1-standings/drivers/GET_RACES';
const baseURL = 'https://ergast.com/api/f1/';
const endURLDrivers = '/driverStandings';

const racesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RACES:
      return action.races;
    default:
      return state;
  }
};

const getRaces = (races) => ({
  type: GET_RACES,
  races,
});

export const fetchRaces = (year) => async (dispatch) => {
  const races = await fetch(`${baseURL}${year}${endURLDrivers}.json`)
    .then((res) => res.json())
    .then((data) => {
      const numberOfRaces = data.MRData.StandingsTable.StandingsLists[0].round;
      return numberOfRaces;
    });

  dispatch(getRaces(races));
};

export default racesReducer;
