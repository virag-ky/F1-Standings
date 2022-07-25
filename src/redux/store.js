import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer, { fetchDefaultSeason } from './homepage/homepage';

const reducers = combineReducers({
  home: homePageReducer,
});

const store = configureStore({ reducer: reducers });
store.dispatch(fetchDefaultSeason(2022));

export default store;
