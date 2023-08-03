import { useState } from "react";
import { BoardRow } from "../BoardRow";

const Board = () => {
  const [ { boardRow1, boardRow2, boardRow3 }, setBoardData ] = useState({
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

  const boardRows = [ boardRow1, boardRow2, boardRow3 ];

  // const makeMove = (row: number, column: number) => {
  //   const newBoardData: { boardRow1: string[], boardRow2: string[], boardRow3: string[] } = {
  //     ...{ boardRow1, boardRow2, boardRow3 }
  //   };
  //   newBoardData[`boardRow${row}`][column] = "X";
  //   setBoardData(newBoardData);
  // };

  return (
    <div>
      { boardRows.map((boardRowData, index) => (
        <BoardRow key={index} boardRowData={boardRowData} />
      ))}
    </div>
  )
};

export default Board;
