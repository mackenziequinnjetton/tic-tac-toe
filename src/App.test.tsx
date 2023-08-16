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
  expect(appElements).toHaveLength(12);
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

test("only one moveButton renders on initial load", () => {
  setup();
  const moveButtonElement = screen.getAllByText(/[0-9]/i);
  expect(moveButtonElement).toHaveLength(1);
});

test("making a move causes there to be two MoveButton rendered", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
  });
  const moveButtons = screen.getAllByText(/[0-9]/i);
  expect(moveButtons).toHaveLength(2);
});

test("making a move, then clicking first MoveButton to undo it, causes there to still be two MoveButtons rendered", () => {
  setup();
  const boardSpaces = screen.getAllByText(/\./i);
  act(() => {
    boardSpaces[0].click();
  });
  const moveButton = screen.getByText(/0/i);
  act(() => {
    moveButton.click();
  });
  const newMoveButtons = screen.getAllByText(/[0-9]/i);
  expect(newMoveButtons).toHaveLength(2);
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
  });
  act(() => {
    boardSpaces[1].click();
  });
  act(() => {
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

test("making several moves, going back 1 move, and then making new moves from that point switched currentToken as expected", () => {
  setup();
  const boardSpaces = screen.getAllByText(/^[.XO]$/i);
  act(() => boardSpaces[0].click());
  act(() => boardSpaces[1].click());
  
  const moveButton = screen.getByText(/1/i);
  act(() => moveButton.click());

  act(() => boardSpaces[2].click());

  const allBoardSpaces = screen.getAllByText(/^[.XO]$/i);
  expect(allBoardSpaces[0]).toHaveTextContent("X");
  expect(allBoardSpaces[2]).toHaveTextContent("O");
});

test("making several moves, going back 2 moves, and then making new moves from that point kept currentToken the same as expected", () => {
  setup();
  const boardSpaces = screen.getAllByText(/^[.XO]$/i);
  act(() => boardSpaces[0].click());
  act(() => boardSpaces[1].click());
  
  const moveButton = screen.getByText(/0/i);
  act(() => moveButton.click());

  act(() => boardSpaces[0].click());

  const allBoardSpaces = screen.getAllByText(/^[.XO]$/i);
  expect(allBoardSpaces[0]).toHaveTextContent("X");
});

test("making several moves, going back an even number of moves, and then going forward an odd number of moves switches currentToken as expected", () => {
  setup();
  const boardSpaces = screen.getAllByText(/^[.XO]$/i);
  act(() => boardSpaces[0].click());
  act(() => boardSpaces[1].click());
  act(() => boardSpaces[2].click());
  
  const moveButton1 = screen.getByText(/1/i);
  act(() => moveButton1.click());

  const moveButton2 = screen.getByText(/2/i);
  act(() => moveButton2.click());

  act(() => boardSpaces[2].click());

  const allBoardSpaces = screen.getAllByText(/^[.XO]$/i);
  expect(allBoardSpaces[0]).toHaveTextContent("X");
  expect(allBoardSpaces[1]).toHaveTextContent("O");
  expect(allBoardSpaces[2]).toHaveTextContent("X");
});

test("making several moves, going back partway, and then making different moves overwrites the history after that point", () => {
  setup();
  const boardSpaces1 = screen.getAllByText(/^[.XO]$/i);
  act(() => boardSpaces1[0].click());
  act(() => boardSpaces1[1].click());
  act(() => boardSpaces1[2].click());
  
  const moveButton1 = screen.getByText(/1/i);
  act(() => moveButton1.click());

  act(() => boardSpaces1[3].click());

  const moveButton2 = screen.getByText(/2/i);
  act(() => moveButton2.click());

  const boardSpaces2 = screen.getAllByText(/^[.XO]$/i);
  expect(boardSpaces2[0]).toHaveTextContent("X");
  expect(boardSpaces2[1]).toHaveTextContent(".");
  expect(boardSpaces2[2]).toHaveTextContent(".");
  expect(boardSpaces2[3]).toHaveTextContent("O");

  const moveButtons = screen.getAllByText(/[0-9]/i);
  expect(moveButtons).toHaveLength(3);
});

test("after a player winning, and then going back a move, the game header is updated to reflect the game no longer being won", () => {
  setup();
  const boardSpaces = screen.getAllByText(/^[.XO]$/i);
  act(() => boardSpaces[0].click());
  act(() => boardSpaces[3].click());
  act(() => boardSpaces[1].click());
  act(() => boardSpaces[4].click());
  act(() => boardSpaces[2].click());

  const moveButton = screen.getByText(/4/i);
  act(() => moveButton.click());

  const nonWinningGameHeaderElement = screen.getByText(/Player X, it's your turn!/i);
  expect(nonWinningGameHeaderElement).toBeInTheDocument();
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
