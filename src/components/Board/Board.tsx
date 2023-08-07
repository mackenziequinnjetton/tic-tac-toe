import { useContext } from "react";
import { BoardRow } from "../BoardRow";
import { spaceNotOccupied, switchToken } from "../../util/utilityFunctions";
import { GameContext } from "../../contexts/GameContext";

const Board = () => {
  const { boardData, setBoardData, currentToken, setCurrentToken } = useContext(GameContext);
  const { boardRow1, boardRow2, boardRow3 } = boardData;
  const boardRows = [ boardRow1, boardRow2, boardRow3 ];

  // TODO: Split part of this function off into helper functions
  const makeMove = (spaceId: number, spaceValue: string) => {
    if (spaceNotOccupied(spaceValue)) {
      const newBoardData = { ...boardData };
      const boardRowNumber = Math.ceil(spaceId / 3);
      const newBoardRow = boardRowNumber === 1 
        ? newBoardData.boardRow1 
        : boardRowNumber === 2 
        ? newBoardData.boardRow2 
        : newBoardData.boardRow3;
      const newBoardSpace = newBoardRow[(spaceId - (3 * (boardRowNumber - 1))) - 1];
      newBoardSpace.spaceValue = currentToken;
      setBoardData(newBoardData);
      switchToken(currentToken, setCurrentToken);
    }
  };

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
