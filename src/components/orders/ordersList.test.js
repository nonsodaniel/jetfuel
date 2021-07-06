import { render, cleanup, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import OrderList from "./OrderList";

afterEach(cleanup);
render(
  <Provider store={store}>
    <OrderList />
  </Provider>
);

describe("Completely render <OrderList />", () => {
  test("render the OrderList component without crashing", () => {
    expect(screen.getAllByTestId("order_list")).toHaveLength(1);
  });
});
