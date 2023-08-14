import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveButton from './MoveButton';

test('renders MoveButton', () => {
  render(<MoveButton />);
  const linkElement = screen.getByText(/MoveButton/i);
  expect(linkElement).toBeInTheDocument();
});
