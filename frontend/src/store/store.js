import { createStore, combineReducers } from "redux";
import employeesReducer from "./employee";
import loadingsReducer from "./loading";
const reducers = { employeesReducer, loadingsReducer };

const rooReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rooReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
