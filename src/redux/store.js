import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import homePageReducer, { fetchSeason } from './homepage/homepage';
import driversReducer, { fetchDrivers } from './drivers/drivers';
import constructorReducer, {
  fetchConstructors,
} from './constructors/constructors';
import racesReducer, { fetchRaces } from './races/races';

const currentYear = new Date().getFullYear().toString();

const reducers = combineReducers({
  home: homePageReducer,
  driver: driversReducer,
  constructor: constructorReducer,
  race: racesReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
store.dispatch(fetchSeason(currentYear));
store.dispatch(fetchDrivers(currentYear));
store.dispatch(fetchConstructors(currentYear));
store.dispatch(fetchRaces(currentYear));

export default store;
