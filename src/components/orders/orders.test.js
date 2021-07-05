import { render, cleanup, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import Orders from "./Orders";

afterEach(cleanup);
render(
  <Provider store={store}>
    <Orders />
  </Provider>
);

describe("Completely render <Orders />", () => {
  test("render the Orders component without crashing", () => {
    expect(screen.getAllByTestId("orders-wrap")).toHaveLength(1);
  });
});
