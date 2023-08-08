import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardRow from './BoardRow';

test('renders BoardRow', () => {
  render(
    <BoardRow 
      boardRowData={[
        { spaceId: 1, spaceValue: "." },
        { spaceId: 2, spaceValue: "." },
        { spaceId: 3, spaceValue: "." }
      ]}
    />);
  const linkElement = screen.getAllByText(/./i);
  expect(linkElement).toHaveLength(3);
});
