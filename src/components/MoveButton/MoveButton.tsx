import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const MoveButton = ({ move }: { move: number }) => {
  const { loadBoardDataFromHistory, boardDataHistoryLength } = useContext(GameContext);

  if (move < boardDataHistoryLength) {
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
