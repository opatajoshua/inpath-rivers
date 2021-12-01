import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import AppButton from './AppButton';
import '@testing-library/jest-dom'

test('AppButton renders passed text', async () => {
  const onChange = jest.fn();
  render(<AppButton text="Submit" onClick={onChange} />);
  expect(screen.getByRole('button')).toHaveTextContent('Submit');
});

test('AppButton calls the onClick callback handler', async () => {
  const onChange = jest.fn();
  render(<AppButton text="Submit" onClick={onChange} />);
  await userEvent.click(screen.getByRole('button'));
  expect(onChange).toHaveBeenCalledTimes(1);
});

export { }