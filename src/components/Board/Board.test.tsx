import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';

test('renders Board', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  expect(linkElements).toHaveLength(9);
});

test('player 1 makes move successfully', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  linkElements[0].click();
  expect(linkElements[0]).toHaveTextContent('X');
});
