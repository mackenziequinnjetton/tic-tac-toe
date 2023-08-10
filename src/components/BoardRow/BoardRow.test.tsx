import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoardRow from "./BoardRow";

test("renders BoardRow", () => {
  render(
    <BoardRow boardRowData={[".", ".", "."]} boardRowIndices={[0, 1, 2]} />,
  );
  const boardSpaceElements = screen.getAllByText(/./i);
  expect(boardSpaceElements).toHaveLength(3);
});
