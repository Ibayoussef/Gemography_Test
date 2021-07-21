import { combineReducers } from "redux";
import reposReducer from "./reposReducer";
import starsReducer from "./starsReducer";
export const rootReducer = combineReducers({
  repos: reposReducer,
  stared: starsReducer,
});
