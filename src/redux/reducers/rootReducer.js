import { combineReducers } from "redux";

//reducers
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
});
