import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const GameHeader = () => {
  const { currentToken, winner } = useContext(GameContext);

  return (
    <div>
      Player {currentToken}
      {winner ? " wins!" : ", it's your turn!"}
    </div>
  );
};

export default GameHeader;
