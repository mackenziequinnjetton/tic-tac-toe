import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardSpace from './BoardSpace';

test('renders BoardSpace', () => {
  render(<BoardSpace />);
  const linkElement = screen.getByText(/\./i);
  expect(linkElement).toBeInTheDocument();
});
