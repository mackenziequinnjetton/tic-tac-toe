import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const GameHeader = () => {
  const { currentToken, winner, draw } = useContext(GameContext);

  return (
    <div>
      {
        draw 
        ? "It's a draw!" 
        : winner 
        ? `Player ${currentToken} wins!` 
        : `Player ${currentToken}, it's your turn!`
      }
    </div>
  );
};

export default GameHeader;
