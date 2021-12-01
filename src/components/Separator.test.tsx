import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Separator from './Separator';

test('Separator renders passed children', async () => {
  render(<Separator>AND</Separator>);

  // expected to see AND in the separator
  expect(await screen.findByText('AND')).toBeInTheDocument();
});

export { }