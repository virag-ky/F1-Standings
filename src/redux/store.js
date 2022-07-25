import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer, { fetchDefaultSeason } from './homepage/homepage';
import driversReducer, { fetchDrivers } from './drivers/drivers';

const reducers = combineReducers({
  home: homePageReducer,
  driver: driversReducer,
});

const store = configureStore({ reducer: reducers });
store.dispatch(fetchDefaultSeason(2022));
store.dispatch(fetchDrivers(2022));

export default store;
