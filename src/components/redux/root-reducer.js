import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  // the key goes to the actual reducer that we want.
  user: userReducer,
});
