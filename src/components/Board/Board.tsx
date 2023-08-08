import { useContext } from "react";
import { BoardRow } from "../BoardRow";
import { GameContext } from "../../contexts/GameContext/GameContext";

const Board = () => {
  const { boardData, currentToken, makeMove } = useContext(GameContext);
  const { boardRow1, boardRow2, boardRow3 } = boardData;
  const boardRows = [ boardRow1, boardRow2, boardRow3 ];

  

  return (
    <div>
      { boardRows.map((boardRowData, index) => (
        <BoardRow 
          key={index} 
          boardRowData={boardRowData} 
          makeMove={makeMove}
          currentToken={currentToken}
        />
      ))}
    </div>
  )
};

export default Board;
