import { createStore, combineReducers } from "redux";
import reducer from "./employee";
const reducers = { reducer };

const rooReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rooReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
