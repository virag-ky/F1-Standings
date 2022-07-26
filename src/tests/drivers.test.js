import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import DriversDetails from "../components/DriversDetails";

describe("driver's page renders correctly", () => {
  test("displays the title 'Driver's Standings' ", () => {
    const { getByText } = render(
      <Provider store={store}>
        <DriversDetails />
      </Provider>
    );
    expect(getByText("Driver's Standings")).toBeInTheDocument();
  });

  test("renders the page", () => {
    const driversPage = render(
      <Provider store={store}>
        <DriversDetails />
      </Provider>
    );
    expect(driversPage).toMatchSnapshot();
  });
});
