import './App.scss';
import { GameHeader } from './components/GameHeader';
import { Board } from './components/Board';
import GameProvider from './contexts/GameContext/GameContext';

function App() {
  return (
    <>
      <GameProvider>
        <GameHeader />
        <Board />
      </GameProvider>
    </>
  );
}

export default App;
