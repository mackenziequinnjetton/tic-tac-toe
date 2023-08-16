import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveButton from './MoveButton';
import { GameContext } from '../../contexts/GameContext/GameContext';

const setup = (move: number, boardData: string[] = [".", ".", ".", ".", ".", ".", ".", ".", "."], boardDataHistoryLength: number = 1) => {
  render(
    <GameContext.Provider value={{
      boardData: boardData,
      currentToken: "X",
      winner: false,
      draw: false,
      restartGame: jest.fn(),
      makeMove: jest.fn(),
      loadBoardDataFromHistory: jest.fn(),
      boardDataHistoryLength: boardDataHistoryLength,
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

test("MoveButton with move=0 has attribute 'disabled' when board is empty", () => {
  setup(0);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toHaveAttribute('disabled');
});

test("MoveButton with move=0 doesn't have attribute 'disabled' when board is not empty", () => {
  setup(0, ["X", ".", ".", ".", ".", ".", ".", ".", "."], 2);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).not.toHaveAttribute('disabled');
});

test("doesn't render MoveButton with move=1 with empty board", () => {
  setup(1);
  const linkElement = screen.queryByText(/1/i);
  expect(linkElement).toBeNull();
});

test("renders MoveButton with move=1 with non-empty board", () => {
  setup(1, ["X", ".", ".", ".", ".", ".", ".", ".", "."], 2);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});


