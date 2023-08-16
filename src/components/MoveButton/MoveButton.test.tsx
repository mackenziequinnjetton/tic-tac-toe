import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveButton from './MoveButton';

test('renders MoveButton with move=0', () => {
  render(<MoveButton move={0} />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

test("doesn't render MoveButton with move=1", () => {
  render(<MoveButton move={1} />);
  const linkElement = screen.queryByText(/1/i);
  expect(linkElement).toBeNull();
});
