import { createStore, combineReducers } from "redux";
import employeesReducer from "./employee";
const reducers = { employeesReducer };

const rooReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rooReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
