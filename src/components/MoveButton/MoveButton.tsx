import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext/GameContext';

const MoveButton = ({ move }: { move: number}) => {
  const { loadBoardDataFromHistory } = useContext(GameContext);

  return (
    <>
      <button onClick={_ => loadBoardDataFromHistory(move)}>
        {move}
      </button>
    </>
  )
};

export default MoveButton;
