const GET_SEASON = 'f1-standings/homepage/GET_SEASON';

const homePageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEASON:
      return state;
    default:
      return state;
  }
};

const getSeason = (year) => ({
  type: GET_SEASON,
  year,
});

const getDefaultSeason = () => {
  const year = 2022;
  return getSeason(year);
};

getDefaultSeason();

export default homePageReducer;
