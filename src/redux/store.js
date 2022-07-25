import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './homepage/homepage';

const reducers = combineReducers({
  home: homePageReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
