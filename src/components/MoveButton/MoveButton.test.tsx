import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveButton from './MoveButton';

test('renders MoveButton', () => {
  render(<MoveButton move={0} />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});
