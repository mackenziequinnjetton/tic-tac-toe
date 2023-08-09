import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameHeader from "./GameHeader";
import { GameContext } from "../../contexts/GameContext/GameContext";

const setup = (
  currentToken: string,
  boardData: string[] = [".", ".", ".", ".", ".", ".", ".", ".", "."],
  winner: boolean = false,
  draw: boolean = false
) => {
  render(
    <GameContext.Provider
      value={{
        currentToken,
        boardData,
        makeMove: jest.fn(),
        winner,
        draw,
      }}
    >
      <GameHeader />
    </GameContext.Provider>,
  );
};

test("renders GameHeader when currentToken is X", () => {
  setup("X");
  const linkElement = screen.getByText(/Player X, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when currentToken is O", () => {
  setup("O");
  const linkElement = screen.getByText(/Player O, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 1, 2, 3", () => {
  setup("X", ["X", "X", "X", ".", ".", ".", ".", ".", "."], true, false);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 4, 5, 6", () => {
  setup("O", [".", ".", ".", "O", "O", "O", ".", ".", "."], true, false);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 7, 8, 9", () => {
  setup("X", [".", ".", ".", ".", ".", ".", "X", "X", "X"], true, false);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 1, 4, 7", () => {
  setup("O", ["O", ".", ".", "O", ".", ".", "O", ".", "."], true, false);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 2, 5, 8", () => {
  setup("X", [".", "X", ".", ".", "X", ".", ".", "X", "."], true, false);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 3, 6, 9", () => {
  setup("O", [".", ".", "O", ".", ".", "O", ".", ".", "O"], true, false);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player X wins with spaces 1, 5, 9", () => {
  setup("X", ["X", ".", ".", ".", "X", ".", ".", ".", "X"], true, false);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when player O wins with spaces 3, 5, 7", () => {
  setup("O", [".", ".", "O", ".", "O", ".", "O", ".", "."], true, false);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders GameHeader when the game is a draw", () => {
  setup("X", ["X", "O", "X", "X", "X", "O", "O", "X", "O"], false, true);
  const linkElement = screen.getByText(/It's a draw!/i);
  expect(linkElement).toBeInTheDocument();
});
