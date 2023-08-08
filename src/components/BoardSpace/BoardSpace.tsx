import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const BoardSpace = ({ spaceId, spaceValue }: { 
  spaceId: number, 
  spaceValue: string,
}) => {
  const { makeMove } = useContext(GameContext);

  const onButtonClick = () => {
    makeMove(spaceId, spaceValue);
  };

  return (
    <button id={`${spaceId}`} className="boardSpace" onClick={onButtonClick}>
      {spaceValue}
    </button>
  )
};

export default BoardSpace;
