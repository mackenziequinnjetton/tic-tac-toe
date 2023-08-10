import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "./Board";
import { act } from "react-dom/test-utils";
import GameProvider from "../../contexts/GameContext/GameContext";

const setup = () => {
  render(
    <GameProvider>
      <Board />
    </GameProvider>,
  );
  return screen.getAllByText(/./i);
};

test("renders Board", () => {
  const boardSpaceElements = setup();
  expect(boardSpaceElements).toHaveLength(9);
});

test("player 1 makes move successfully", () => {
  const boardSpaceElements = setup();
  act(() => {
    boardSpaceElements[0].click();
  });
  expect(boardSpaceElements[0]).toHaveTextContent("X");
});

test("player 2 makes move successfully after player 1", () => {
  const boardSpaceElements = setup();
  act(() => {
    boardSpaceElements[0].click();
  });
  act(() => {
    boardSpaceElements[1].click();
  });
  expect(boardSpaceElements[1]).toHaveTextContent("O");
});

test("player 2 cannot overwrite player 1's move", () => {
  const boardSpaceElements = setup();
  act(() => {
    boardSpaceElements[0].click();
  });
  act(() => {
    boardSpaceElements[0].click();
  });
  expect(boardSpaceElements[0]).toHaveTextContent("X");
});

test("player 1 cannot make another move after player 2 wins", () => {
  const boardSpaceElements = setup();
  act(() => {
    boardSpaceElements[0].click();
  });
  act(() => {
    boardSpaceElements[1].click();
  });
  act(() => {
    boardSpaceElements[6].click();
  });
  act(() => {
    boardSpaceElements[4].click();
  });
  act(() => {
    boardSpaceElements[8].click();
  });
  act(() => {
    boardSpaceElements[7].click();
  });
  act(() => {
    boardSpaceElements[2].click();
  });
  expect(boardSpaceElements[2]).toHaveTextContent(".");
});
