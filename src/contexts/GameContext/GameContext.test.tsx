import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameContext } from './GameContext';

const setup = () => {
  render(
    <GameContext.Provider value={{
      boardData: [ ".", ".", ".", ".", ".", ".", ".", ".", "." ],
      currentToken: "X",
      makeMove: jest.fn(),
      winner: false
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
