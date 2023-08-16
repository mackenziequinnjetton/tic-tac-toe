import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const MoveButton = ({ move }: { move: number }) => {
  const { loadBoardDataFromHistory } = useContext(GameContext);

  if (move === 0) {
    return (
      <>
        <button onClick={_ => loadBoardDataFromHistory(move)}>
          {move}
        </button>
      </>
    )
  } else {
    return null;
  }
};

export default MoveButton;
