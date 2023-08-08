import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameHeader from './GameHeader';
import { GameContext } from '../../contexts/GameContext/GameContext';

const setup = (
  currentToken: string, 
  boardSpaces: string[] = [".", ".", ".", ".", ".", ".", ".", ".", "."],
  winner: boolean = false
) => {
  render(
    <GameContext.Provider value={{
      boardData: {
        boardRow1: [
          { spaceId: 1, spaceValue: boardSpaces[0] },
          { spaceId: 2, spaceValue: boardSpaces[1] },
          { spaceId: 3, spaceValue: boardSpaces[2] }
        ],
        boardRow2: [
          { spaceId: 4, spaceValue: boardSpaces[3] },
          { spaceId: 5, spaceValue: boardSpaces[4] },
          { spaceId: 6, spaceValue: boardSpaces[5] }
        ],
        boardRow3: [
          { spaceId: 7, spaceValue: boardSpaces[6] },
          { spaceId: 8, spaceValue: boardSpaces[7] },
          { spaceId: 9, spaceValue: boardSpaces[8] }
        ]
      },
      currentToken: currentToken,
      makeMove: jest.fn(),
      winner
    }}>
      <GameHeader />
    </GameContext.Provider>
  );
}

test('renders GameHeader when currentToken is X', () => {
  setup("X");
  const linkElement = screen.getByText(/Player X, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when currentToken is O', () => {
  setup('O');
  const linkElement = screen.getByText(/Player O, it's your turn!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player X wins with spaces 1, 2, 3', () => {
  setup("X", ["X", "X", "X", ".", ".", ".", ".", ".", "."], true);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player O wins with spaces 4, 5, 6', () => {
  setup("O", [".", ".", ".", "O", "O", "O", ".", ".", "."], true);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player X wins with spaces 7, 8, 9', () => {
  setup("X", [".", ".", ".", ".", ".", ".", "X", "X", "X"], true);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player O wins with spaces 1, 4, 7', () => {
  setup("O", ["O", ".", ".", "O", ".", ".", "O", ".", "."], true);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player X wins with spaces 2, 5, 8', () => {
  setup("X", [".", "X", ".", ".", "X", ".", ".", "X", "."], true);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GameHeader when player O wins with spaces 3, 6, 9', () => {
  setup("O", [".", ".", "O", ".", ".", "O", ".", ".", "O"], true);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
} );

test('renders GameHeader when player X wins with spaces 1, 5, 9', () => {
  setup("X", ["X", ".", ".", ".", "X", ".", ".", ".", "X"], true);
  const linkElement = screen.getByText(/Player X wins!/i);
  expect(linkElement).toBeInTheDocument();
} );

test('renders GameHeader when player O wins with spaces 3, 5, 7', () => {
  setup("O", [".", ".", "O", ".", "O", ".", "O", ".", "."], true);
  const linkElement = screen.getByText(/Player O wins!/i);
  expect(linkElement).toBeInTheDocument();
} );
