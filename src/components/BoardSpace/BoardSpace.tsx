import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const BoardSpace = ({ spaceValue, spaceIndex }: { 
  spaceValue: string,
  spaceIndex: number 
}) => {
  const { makeMove } = useContext(GameContext);

  const onButtonClick = () => {
    makeMove(spaceIndex);
  };

  return (
    <button id={`${spaceIndex}`} className="boardSpace" onClick={onButtonClick}>
      {spaceValue}
    </button>
  )
};

export default BoardSpace;
