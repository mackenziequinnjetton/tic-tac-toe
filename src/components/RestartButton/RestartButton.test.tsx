import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestartButton from './RestartButton';
import { GameContext } from '../../contexts/GameContext/GameContext';

const setup = () => {
  render(
    <GameContext.Provider value={{
      boardData: [".", ".", ".", ".", ".", ".", ".", ".", "."],
      currentToken: "X",
      winner: false,
      draw: false,
      restartGame: () => {},
      makeMove: () => {},
    }}>
      <RestartButton />
    </GameContext.Provider>
  );
}

test('renders RestartButton', () => {
  setup();
  const restartButtonElement = screen.getByText(/Restart/i);
  expect(restartButtonElement).toBeInTheDocument();
});

test("restart button is disabled on game start", () => {
  setup();
  const restartButtonElement = screen.getByText(/Restart/i);
  expect(restartButtonElement).toBeDisabled();
});
