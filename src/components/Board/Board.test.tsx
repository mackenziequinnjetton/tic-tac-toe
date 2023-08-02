import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';

test('renders Board', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  expect(linkElements).toHaveLength(9);
});
