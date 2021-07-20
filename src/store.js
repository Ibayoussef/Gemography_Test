import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reposReducer from "./reducers/reposReducer";

const store = createStore(
  reposReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
