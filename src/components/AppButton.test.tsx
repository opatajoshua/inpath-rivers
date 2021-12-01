import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import AppButton from './AppButton';

test('calls the onChange callback handler', async () => {
  const onChange = jest.fn();
  render(<AppButton text="Submit" onClick={onChange} />);
  await userEvent.click(screen.getByRole('button'));
  expect(onChange).toHaveBeenCalledTimes(1);
});

export { }