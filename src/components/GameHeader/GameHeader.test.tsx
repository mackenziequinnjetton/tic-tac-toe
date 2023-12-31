import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameHeader from "./GameHeader";
import { GameContext } from "../../contexts/GameContext/GameContext";

const setup = (
  currentToken: string,
  boardData: string[] = [".", ".", ".", ".", ".", ".", ".", ".", "."],
  winner: boolean = false,
  draw: boolean = false,
  restartGame: () => void = jest.fn(),
) => {
  render(
    <GameContext.Provider
      value={{
        currentToken,
        boardData,
        makeMove: jest.fn(),
        winner,
        draw,
        restartGame,
        loadBoardDataFromHistory: jest.fn(),
        boardDataHistoryLength: 1,
        currentMoveNumber: 0
      }}
    >
      <GameHeader />
    </GameContext.Provider>,
  );
};

test("renders GameHeader when currentToken is X", () => {
  setup("X");
  const gameHeaderElement = screen.getByText(/Player X, it's your turn!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when currentToken is O", () => {
  setup("O");
  const gameHeaderElement = screen.getByText(/Player O, it's your turn!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 1, 2, 3", () => {
  setup("O", ["X", "X", "X", "O", "O", ".", ".", ".", "."], true, false);
  const gameHeaderElement = screen.getByText(/Player X wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 4, 5, 6", () => {
  setup("X", ["X", "X", ".", "O", "O", "O", "X", ".", "."], true, false);
  const gameHeaderElement = screen.getByText(/Player O wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 7, 8, 9", () => {
  setup("O", ["O", "O", ".", ".", ".", ".", "X", "X", "X"], true, false);
  const gameHeaderElement = screen.getByText(/Player X wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 1, 4, 7", () => {
  setup("X", ["O", "X", "X", "O", "X", ".", "O", ".", "."], true, false);
  const gameHeaderElement = screen.getByText(/Player O wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 2, 5, 8", () => {
  setup("O", ["O", "X", ".", "O", "X", ".", ".", "X", "."], true, false);
  const gameHeaderElement = screen.getByText(/Player X wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 3, 6, 9", () => {
  setup("X", ["X", "X", "O", "X", ".", "O", ".", ".", "O"], true, false);
  const gameHeaderElement = screen.getByText(/Player O wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 1, 5, 9", () => {
  setup("O", ["X", "O", "O", ".", "X", ".", ".", ".", "X"], true, false);
  const gameHeaderElement = screen.getByText(/Player X wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 3, 5, 7", () => {
  setup("X", ["X", "X", "O", "X", "O", ".", "O", ".", "."], true, false);
  const gameHeaderElement = screen.getByText(/Player O wins!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders GameHeader when the game is a draw", () => {
  setup("O", ["X", "O", "X", "X", "X", "O", "O", "X", "O"], false, true);
  const gameHeaderElement = screen.getByText(/It's a draw!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});
