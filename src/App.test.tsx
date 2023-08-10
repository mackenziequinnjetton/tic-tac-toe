import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders App", () => {
  render(<App />);
  const linkElements = screen.getAllByText(/./i);
  expect(linkElements).toHaveLength(11);
});

test("renders GameHeader", () => {
  render(<App />);
  const linkElement = screen.getByText(/Player X, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Board", () => {
  render(<App />);
  const linkElements = screen.getAllByText(/\./i);
  expect(linkElements).toHaveLength(9);
});

test("renders RestartButton", () => {
  render(<App />);
  const linkElement = screen.getByText(/Restart/i);
  expect(linkElement).toBeInTheDocument();
});

test("clicking restart button resets the board", () => {
  render(<App />);
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
