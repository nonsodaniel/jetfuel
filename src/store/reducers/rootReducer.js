import { combineReducers } from "redux";
import orderReducers from "../reducers/orderReducers";

export default combineReducers({
  orders: orderReducers,
});
