import { combineReducers, applyMiddleware, configureStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  home: homePageReducer,
});

const store = configureStore(reducers, applyMiddleware(thunk));

export default store;
