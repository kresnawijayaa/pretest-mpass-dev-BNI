import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import appReducer from "./reducers/app";
import bookingReducer from "./reducers/booking";
import promosReducer from "./reducers/promos";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appReducer,
  bookingReducer,
  promosReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
