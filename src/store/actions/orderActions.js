import { Get } from "../../components/config/apiServices";

import {
  START_FETCH_ORDERS,
  SET_ORDERS_DATA,
  ORDERS_FETCH_FAILED,
  SEARCH_ORDERS,
  SORT_DATE,
  NEXT_PAGE,
  PREV_PAGE,
} from "./types";
// https://cors-anywhere.herokuapp.com/
let url = `https://api.hatchways.io/assessment/work_orders`;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_FETCH_ORDERS });
      const response = await Get(url);
      const { status } = response;
      let payload = {};
      if (status === 200) {
        payload.orders = response.data;
        dispatch({ type: SET_ORDERS_DATA, payload });
      } else {
        payload.errorMsg = "failed to fetch data";
        dispatch({ type: SET_ORDERS_DATA, payload });
      }
    } catch (error) {
      dispatch({
        type: ORDERS_FETCH_FAILED,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const handleSearchOrders = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_ORDERS,
      payload: { searchValue },
    });
  };
};
export const handleSortDate = (activeDate) => {
  return (dispatch) => {
    dispatch({
      type: SORT_DATE,
      payload: { activeDate },
    });
  };
};
export const handlePrevBtn = () => {
  return (dispatch) => {
    dispatch({
      type: PREV_PAGE,
    });
  };
};
export const handleNextBtn = () => {
  return (dispatch) => {
    dispatch({
      type: NEXT_PAGE,
    });
  };
};
