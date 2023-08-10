import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const RestartButton = () => {
  const { restartGame } = useContext(GameContext);

  return (
    <>
      <button onClick={restartGame}>
        Restart
      </button>
    </>
  )
};

export default RestartButton;
