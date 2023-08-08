import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';
import { act } from 'react-dom/test-utils';
import GameProvider from '../../contexts/GameContext/GameContext';

const setup = () => {
  render(
    <GameProvider>
      <Board />
    </GameProvider>
  );
  return screen.getAllByText(/./i);
}

test('renders Board', () => {
  const linkElements = setup();
  expect(linkElements).toHaveLength(9);
});

test('player 1 makes move successfully', () => {
  const linkElements = setup();
  act(() => {
    linkElements[0].click();
  });
  expect(linkElements[0]).toHaveTextContent('X');
});

test('player 2 makes move successfully after player 1', () => {
  const linkElements = setup();
  act(() => {
    linkElements[0].click();
  });
  act(() => {
    linkElements[1].click();
  });
  expect(linkElements[1]).toHaveTextContent('O');
});

test('player 2 cannot overwrite player 1\'s move', () => {
  const linkElements = setup();
  act(() => {
    linkElements[0].click();
  });
  act(() => {
    linkElements[0].click();
  });
  expect(linkElements[0]).toHaveTextContent('X');
});
