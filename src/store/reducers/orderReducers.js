import {
  START_FETCH_ORDERS,
  SET_ORDERS_DATA,
  ORDERS_FETCH_FAILED,
  SEARCH_ORDERS,
  SORT_DATE,
  PREV_PAGE,
  NEXT_PAGE,
} from "../actions/types";

const INTIAL_STATE = {
  allOrders: [],
  data: [],
  error: false,
  loading: false,
  errorMessage: "",
  searchValue: "",
  search: true,
  totalPages: 1,
  currentPage: 1,
  pageLength: 15,
  pageData: [],
  currentCategory: "All",
};

export const reducer = (state = INTIAL_STATE, actions) => {
  switch (actions.type) {
    case START_FETCH_ORDERS:
      return { ...state, loading: true };
    case SET_ORDERS_DATA:
      let data = actions.payload.orders.orders;
      return {
        ...state,
        error: false,
        loading: false,
        errorMessage: "",
        allOrders: data,
        data,
        totalPages: Math.ceil(data.length / state.pageLength),
        pageData: paginate(data, state.currentPage, state.pageLength),
      };
    case ORDERS_FETCH_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: actions.payload.errorMsg,
        loading: false,
      };
    case SEARCH_ORDERS:
      const { searchValue } = actions.payload;

      let searchData =
        searchValue === ""
          ? state.allOrders
          : state.allOrders.filter(({ name }) =>
              name.includes(searchValue.toLowerCase())
            );
      return {
        ...state,
        search: true,
        currentPage: 1,
        searchValue: searchValue,
        totalPages: Math.ceil(searchData.length / state.pageLength),
        data: searchData,
        pageData: paginate(searchData, 1, state.pageLength),
      };
    case SORT_DATE:
      const { activeDate } = actions.payload;
      let sortDateData =
        activeDate === "Earliest"
          ? [...state.allOrders].sort((a, b) =>
              new Date(a.deadline)
                .toISOString()
                .localeCompare(new Date(b.deadline).toISOString())
            )
          : activeDate === "Latest"
          ? [...state.allOrders].sort((a, b) =>
              new Date(b.deadline)
                .toISOString()
                .localeCompare(new Date(a.deadline).toISOString())
            )
          : null;
      return {
        ...state,
        search: false,
        currentPage: 1,
        searchValue: "",
        data: sortDateData,
        activeOrder: activeDate,
        pageData: paginate(sortDateData, 1, state.pageLength),
      };

    case PREV_PAGE:
      let prevPage = state.currentPage - 1;
      return {
        ...state,
        currentPage: prevPage,
        pageData: paginate(state.data, prevPage, state.pageLength),
      };

    case NEXT_PAGE:
      let nextPage = state.currentPage + 1;
      return {
        ...state,
        currentPage: nextPage,
        pageData: paginate(state.data, nextPage, state.pageLength),
      };
    default:
      return { ...state };
  }
};

const paginate = (arr, currentPage, pagelength) => {
  return arr.slice((currentPage - 1) * pagelength, pagelength * currentPage);
};

export default reducer;
