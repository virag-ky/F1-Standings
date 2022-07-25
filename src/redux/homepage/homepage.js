const GET_DEFAULT_SEASON = 'f1-standings/homepage/GET_DEFAULT_SEASON';
const GET_SEASON = 'f1-standings/homepage/GET_SEASON';

const homePageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DEFAULT_SEASON:
      return action.year;
    case GET_SEASON:
      return action.year;
    default:
      return state;
  }
};

const getDefaultSeason = (year) => ({
  type: GET_DEFAULT_SEASON,
  year,
});

const getSeason = (year) => ({
  type: GET_DEFAULT_SEASON,
  year,
});

export const fetchDefaultSeason = (year) => (dispatch) => {
  dispatch(getDefaultSeason(year));
};

export const fetchSeason = (year) => (dispatch) => {
  dispatch(getSeason(year));
};

export default homePageReducer;
