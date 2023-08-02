import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders GameHeader within App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Player X, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Board within App', () => {
  render(<App />);
  const linkElement = screen.getByText(/\.{9}/i);
  expect(linkElement).toBeInTheDocument();
});
