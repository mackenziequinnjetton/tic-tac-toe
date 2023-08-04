import { useState } from "react";
import { BoardRow } from "../BoardRow";
import { spaceNotOccupied, switchToken } from "../../util/utilityFunctions";

const Board = () => {
  const [ boardData, setBoardData ] = useState({
    boardRow1: [
      { spaceId: 1, spaceValue: "." },
      { spaceId: 2, spaceValue: "." },
      { spaceId: 3, spaceValue: "." }
    ],
    boardRow2: [
      { spaceId: 4, spaceValue: "." },
      { spaceId: 5, spaceValue: "." },
      { spaceId: 6, spaceValue: "." }
    ],
    boardRow3: [
      { spaceId: 7, spaceValue: "." },
      { spaceId: 8, spaceValue: "." },
      { spaceId: 9, spaceValue: "." }
    ]
  });

  const [ currentToken, setCurrentToken ] = useState("X");

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
