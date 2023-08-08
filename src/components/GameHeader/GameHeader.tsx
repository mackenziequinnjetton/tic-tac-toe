import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const GameHeader = () => {
  const { currentToken, winner } = useContext(GameContext);

  if (winner) {
    return (
      <div>
        Player { currentToken } wins!
      </div>
    )
  }
  
  return (
    <div>
      Player { currentToken }, it's your turn!
    </div>
  )
};

export default GameHeader;
