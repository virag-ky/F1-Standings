const GET_DRIVERS = 'f1-standings/drivers/GET_DRIVERS';
const baseURL = 'http://ergast.com/api/f1/';
const endURLDrivers = '/driverStandings';

const driversReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return action.drivers;
    default:
      return state;
  }
};

const getDrivers = (drivers) => ({
  type: GET_DRIVERS,
  drivers,
});

export const fetchDrivers = (year) => async (dispatch) => {
  const drivers = await fetch(`${baseURL}${year}${endURLDrivers}.json`)
    .then((res) => res.json())
    .then((data) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
      (driver) => {
        const { position, points, wins } = driver;
        const firstName = driver.Driver.givenName;
        const lastName = driver.Driver.familyName;
        const driverName = `${firstName} ${lastName}`;
        return {
          position, points, wins, driverName,
        };
      },
    ));

  dispatch(getDrivers(drivers));
};

export default driversReducer;
