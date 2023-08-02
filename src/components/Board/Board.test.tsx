import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';

test('renders Board', () => {
  render(<Board />);
  const linkElement = screen.getByText(/\.{9}/i);
  expect(linkElement).toBeInTheDocument();
});
