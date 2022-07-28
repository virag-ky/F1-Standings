import { fireEvent, screen, render } from '@testing-library/react';
import IconButton from '@mui/material/IconButton';

test("fires the event when it's clicked", () => {
  const handleClick = jest.fn();
  render(<IconButton data-testid="search" onClick={handleClick} />);
  fireEvent.click(screen.getByTestId('search'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
