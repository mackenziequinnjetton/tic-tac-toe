import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const MoveButton = ({ move }: { move: number }) => {
  const { loadBoardDataFromHistory, boardDataHistoryLength, currentMoveNumber } = useContext(GameContext);

  if (move === currentMoveNumber) {
    return (
      <>
        <button disabled onClick={_ => loadBoardDataFromHistory(move)}>
          {move}
        </button>
      </>
    )  
    } else if (boardDataHistoryLength > move) {
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
