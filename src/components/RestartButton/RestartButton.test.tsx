import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestartButton from './RestartButton';

test('renders RestartButton', () => {
  render(<RestartButton />);
  const linkElement = screen.getByText(/Restart/i);
  expect(linkElement).toBeInTheDocument();
});
