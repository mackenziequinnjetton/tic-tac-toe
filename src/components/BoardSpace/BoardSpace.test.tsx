import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoardSpace from "./BoardSpace";

test("renders BoardSpace with .", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="." />);
  const boardSpaceElement = screen.getByText(/\./i);
  expect(boardSpaceElement).toBeInTheDocument();
});

test("renders BoardSpace with X", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="X" />);
  const boardSpaceElement = screen.getByText(/X/i);
  expect(boardSpaceElement).toBeInTheDocument();
});

test("renders BoardSpace with O", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="O" />);
  const boardSpaceElement = screen.getByText(/O/i);
  expect(boardSpaceElement).toBeInTheDocument();
});
