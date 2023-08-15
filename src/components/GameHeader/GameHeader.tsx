import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContext";

const GameHeader = () => {
  const { currentToken, winner, draw } = useContext(GameContext);

  return (
    <div>
      {
        winner 
        ? `Player ${currentToken} wins!`
        : draw
        ? "It's a draw!"
        : `Player ${currentToken}, it's your turn!`
      }
    </div>
  );
};

export default GameHeader;
