import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameContext } from './GameContext';

const setup = () => {
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
      currentToken: "X",
      makeMove: jest.fn()
    }}>
      <div>GameContext</div>
    </GameContext.Provider>
  );
}

test('renders GameContext', () => {
  setup();

  const linkElement = screen.getByText(/GameContext/i);
  expect(linkElement).toBeInTheDocument();
});
