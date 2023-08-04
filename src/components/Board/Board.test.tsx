import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';
import { act } from 'react-dom/test-utils';

test('renders Board', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  expect(linkElements).toHaveLength(9);
});

test('player 1 makes move successfully', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  act(() => {
    linkElements[0].click();
  });
  expect(linkElements[0]).toHaveTextContent('X');
});

test('player 2 makes move successfully after player 1', () => {
  render(<Board />);
  const linkElements = screen.getAllByText(/./i);
  act(() => {
    linkElements[0].click();
  });
  act(() => {
    linkElements[1].click();
  });
  expect(linkElements[1]).toHaveTextContent('O');
});

// TODO: Test that one player cannot click on another's space and overwrite it
