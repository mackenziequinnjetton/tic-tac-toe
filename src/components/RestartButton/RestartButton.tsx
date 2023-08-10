import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const RestartButton = () => {
  const { restartGame, boardData } = useContext(GameContext);

  const emptyBoard = [".", ".", ".", ".", ".", ".", ".", ".", "."]

  return (
    <>
      <button 
        id="restart-button" 
        onClick={restartGame} 
        disabled={boardData.join("") === emptyBoard.join("")} 
      >
        Restart
      </button>
    </>
  )
};

export default RestartButton;
