const GET_CONSTRUCTORS = 'f1-standings/constructors/GET_CONSTRUCTORS';
const baseURL = 'http://ergast.com/api/f1/';
const endURLConstructors = '/constructorStandings';

const constructorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONSTRUCTORS:
      return action.constructors;
    default:
      return state;
  }
};

const getConstructors = (constructors) => ({
  type: GET_CONSTRUCTORS,
  constructors,
});

export const fetchConstructors = (year) => async (dispatch) => {
  if (year < 1958) {
    dispatch(getConstructors([]));
  }
  const constructors = await fetch(
    `${baseURL}${year}${endURLConstructors}.json`,
  )
    .then((res) => res.json())
    .then((data) => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
      (constructor) => {
        const { position, points, wins } = constructor;
        const { name } = constructor.Constructor;
        return {
          position,
          points,
          wins,
          name,
        };
      },
    ));

  dispatch(getConstructors(constructors));
};

export default constructorReducer;
