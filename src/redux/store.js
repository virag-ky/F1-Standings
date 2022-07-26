import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer, { fetchSeason } from './homepage/homepage';
import driversReducer, { fetchDrivers } from './drivers/drivers';
import constructorReducer, {
  fetchConstructors,
} from './constructors/constructors';

const currentYear = new Date().getFullYear();

const reducers = combineReducers({
  home: homePageReducer,
  driver: driversReducer,
  constructor: constructorReducer,
});

const store = configureStore({ reducer: reducers });
store.dispatch(fetchSeason(currentYear));
store.dispatch(fetchDrivers(currentYear));
store.dispatch(fetchConstructors(currentYear));

export default store;
