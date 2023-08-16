import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveButton from './MoveButton';
import { GameContext } from '../../contexts/GameContext/GameContext';

const setup = (move: number) => {
  render(
    <GameContext.Provider value={{
      boardData: [".", ".", ".", ".", ".", ".", ".", ".", "."],
        currentToken: "X",
        winner: false,
        draw: false,
        restartGame: jest.fn(),
        makeMove: jest.fn(),
        loadBoardDataFromHistory: jest.fn(),
        boardDataHistoryLength: 1,
    }}>
      <MoveButton move={move} />
    </GameContext.Provider>
  )
}

test('renders MoveButton with move=0', () => {
  setup(0);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

test("doesn't render MoveButton with move=1", () => {
  setup(1);
  const linkElement = screen.queryByText(/1/i);
  expect(linkElement).toBeNull();
});
