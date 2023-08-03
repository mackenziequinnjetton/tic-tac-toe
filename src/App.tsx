import React from 'react';
import './App.scss';
import { GameHeader } from './components/GameHeader';
import { Board } from './components/Board';
import { BoardProvider } from './contexts/BoardContext';

function App() {
  return (
    <>
      <BoardProvider>
        <GameHeader />
        <Board />
      </BoardProvider>
    </>
  );
}

export default App;
