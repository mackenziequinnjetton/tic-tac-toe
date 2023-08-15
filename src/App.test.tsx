import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

const setup = () => {
  render(<App />);
};

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});


test("renders App", () => {
  setup();
  const appElements = screen.getAllByText(/./i);
  expect(appElements).toHaveLength(21);
});

test("renders GameHeader", () => {
  setup();
  const gameHeaderElement = screen.getByText(/Player X, it's your turn!/i);
  expect(gameHeaderElement).toBeInTheDocument();
});

test("renders Board", () => {
  setup();
  const boardSpaceElements = screen.getAllByText(/\./i);
  expect(boardSpaceElements).toHaveLength(9);
});

test("renders MoveButtons", () => {
  setup();
  const moveButtonElement = screen.getAllByText(/[0-9]/i);
  expect(moveButtonElement).toHaveLength(10);
});

test("making a move and clicking MoveButton 0 undoes move", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
  });
  const moveButton = screen.getByText(/0/i);
  act(() => {
    moveButton.click();
  });
  const newBoardSpaces = screen.getAllByText(/\./i);
  expect(newBoardSpaces).toHaveLength(9);
});

test("making 3 moves and clicking MoveButton 1 undoes several but not all moves", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
    boardSpaces[1].click();
    boardSpaces[2].click();
  });
  const moveButton = screen.getByText(/1/i);
  act(() => {
    moveButton.click();
  });
  const emptyBoardSpaces = screen.getAllByText(/\./i);
  expect(emptyBoardSpaces).toHaveLength(8);

  const allBoardSpaces = screen.getAllByText(/^[.XO]$/i);
  expect(allBoardSpaces[0]).toHaveTextContent("X");
});

test("making 3 moves, clicking MoveButton 1, then clicking MoveButton 2 restores board to expected intermediate state", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);

  act(() => {
    boardSpaces[0].click();
  });
  act(() => {
    boardSpaces[1].click();
  });
  act(() => {
    boardSpaces[2].click();
  });

  const moveButton1 = screen.getByText(/1/i);
  act(() => {
    moveButton1.click();
  });
  const moveButton2 = screen.getByText(/2/i);
  act(() => {
    moveButton2.click();
  });

  const emptyBoardSpaces = screen.getAllByText(/\./i);
  expect(emptyBoardSpaces).toHaveLength(7);

  const allBoardSpaces = screen.getAllByText(/^[.XO]$/i);
  expect(allBoardSpaces[0]).toHaveTextContent("X");
  expect(allBoardSpaces[1]).toHaveTextContent("O");
});

test("renders RestartButton", () => {
  setup();
  const restartButtonElement = screen.getByText(/Restart/i);
  expect(restartButtonElement).toBeInTheDocument();
});

test("clicking restart button resets the game header", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
  });
  const restartButton = screen.getByText(/Restart/i);
  act(() => {
    restartButton.click();
  });
  const gameHeaderElement = screen.getByText(/Player X, it's your turn!/i);
  expect(gameHeaderElement).toBeInTheDocument();
  
});

test("clicking restart button resets the board", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
  });
  const restartButton = screen.getByText(/Restart/i);
  act(() => {
    restartButton.click();
  });
  const resetBoardSpaces = screen.getAllByText(/\./i);
  expect(resetBoardSpaces).toHaveLength(9);
});
