import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardRow from './BoardRow';
import makeMove from '../Board/Board'
import switchToken from '../Board/Board'

test('renders BoardRow', () => {
  render(
    <BoardRow 
      boardRowData={[
        { spaceId: 1, spaceValue: "." },
        { spaceId: 2, spaceValue: "." },
        { spaceId: 3, spaceValue: "." }
      ]}
      makeMove={makeMove}
      currentToken="X"
      switchToken={switchToken} 
    />);
  const linkElement = screen.getAllByText(/./i);
  expect(linkElement).toHaveLength(3);
});
