import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ConstructorsDetails from '../components/ConstructorsDetails';

describe("constructor's page renders correctly", () => {
  test("displays the title 'Constructor's Standings' ", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ConstructorsDetails />
      </Provider>,
    );
    expect(getByText("CONSTRUCTOR'S STANDINGS")).toBeInTheDocument();
  });

  test('renders the page', () => {
    const constructorsPage = render(
      <Provider store={store}>
        <ConstructorsDetails />
      </Provider>,
    );
    expect(constructorsPage).toMatchSnapshot();
  });
});
