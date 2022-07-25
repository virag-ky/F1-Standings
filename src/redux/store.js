import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  // home: homePageReducer,
});

const store = configureStore(reducers);

export default store;
