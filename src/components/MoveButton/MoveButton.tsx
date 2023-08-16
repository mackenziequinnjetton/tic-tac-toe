import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const MoveButton = ({ move }: { move: number }) => {
  const { loadBoardDataFromHistory, boardDataHistoryLength } = useContext(GameContext);

  if (move === 0 && boardDataHistoryLength === 1) {
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
