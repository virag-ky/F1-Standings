const GET_SEASON = 'f1-standings/homepage/GET_SEASON';

const homePageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEASON:
      return action.year;
    default:
      return state;
  }
};

const getSeason = (year) => ({
  type: GET_SEASON,
  year,
});

export const fetchSeason = (year) => (dispatch) => {
  dispatch(getSeason(year));
};

export default homePageReducer;
