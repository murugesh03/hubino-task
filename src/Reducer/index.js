import customerRedux from "./customer";
import { combineReducers } from "redux";

export default combineReducers({
  customer: customerRedux,
});
