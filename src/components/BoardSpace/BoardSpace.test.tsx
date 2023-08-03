import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardSpace from './BoardSpace';

test('renders BoardSpace', () => {
  render(<BoardSpace spaceData="."/>);
  const linkElement = screen.getByText(/\./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders BoardSpace with value', () => {
  render(<BoardSpace spaceData="X" />);
  const linkElement = screen.getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});
