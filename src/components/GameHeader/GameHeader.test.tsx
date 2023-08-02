import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameHeader from './GameHeader';

test('renders GameHeader', () => {
  render(<GameHeader />);
  const linkElement = screen.getByText(/Player X, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});
