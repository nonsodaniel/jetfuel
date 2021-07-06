import Header from "./Header";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";

afterEach(cleanup);

render(
  <Provider store={store}>
    <Header />
  </Provider>
);

const setup = () => {
  const input = render(
    <Provider store={store}>
      <Header />
    </Provider>
  ).getByLabelText("search-textfield");
  return {
    input,
  };
};

describe("Completely render <Header />", () => {
  test("render the Header component without crashing", () => {
    expect(screen.getAllByTestId("header")).toHaveLength(1);
    expect(screen.getAllByTestId("search-textfield")).toHaveLength(1);
    expect(screen.getByPlaceholderText("Search Orders"));
    expect(screen.getAllByTestId("sort-row")).toHaveLength(1);
  });
  test("It should allow users type their search texts", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Some orders" } });
    expect(input.value).toBe("Some orders");
  });

  test("It should allow the search text to be deleted", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "deleted texts" } });
    expect(input.value).toBe("deleted texts");
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
  });
});
