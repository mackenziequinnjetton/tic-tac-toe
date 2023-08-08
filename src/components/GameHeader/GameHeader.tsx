import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const GameHeader = () => {
  const { currentToken } = useContext(GameContext);

  return (
    <div>
      Player { currentToken }, it's your turn!
    </div>
  )
};

export default GameHeader;
