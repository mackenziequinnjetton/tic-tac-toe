import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameHeader from './GameHeader';
import { GameContext } from '../../contexts/GameContext/GameContext';

const setup = (currentToken: string) => {
  render(
    <GameContext.Provider value={{
      boardData: {
        boardRow1: [
          { spaceId: 1, spaceValue: "." },
          { spaceId: 2, spaceValue: "." },
          { spaceId: 3, spaceValue: "." }
        ],
        boardRow2: [
          { spaceId: 4, spaceValue: "." },
          { spaceId: 5, spaceValue: "." },
          { spaceId: 6, spaceValue: "." }
        ],
        boardRow3: [
          { spaceId: 7, spaceValue: "." },
          { spaceId: 8, spaceValue: "." },
          { spaceId: 9, spaceValue: "." }
        ]
      },
      currentToken: currentToken,
      makeMove: jest.fn()
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
