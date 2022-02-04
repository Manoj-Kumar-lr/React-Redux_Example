import { combineReducers } from "redux";
import math from "./MathReducers";
import user from "./UserReducers";

export const rootReducer = combineReducers({
  math,
  user
});
