import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestartButton from './RestartButton';

test('renders RestartButton', () => {
  render(<RestartButton />);
  const restartButtonElement = screen.getByText(/Restart/i);
  expect(restartButtonElement).toBeInTheDocument();
});
