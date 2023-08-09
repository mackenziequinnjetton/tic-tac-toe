import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoardSpace from "./BoardSpace";

test("renders BoardSpace with .", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="." />);
  const linkElement = screen.getByText(/\./i);
  expect(linkElement).toBeInTheDocument();
});

test("renders BoardSpace with X", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="X" />);
  const linkElement = screen.getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders BoardSpace with O", () => {
  render(<BoardSpace spaceIndex={1} spaceValue="O" />);
  const linkElement = screen.getByText(/O/i);
  expect(linkElement).toBeInTheDocument();
});
