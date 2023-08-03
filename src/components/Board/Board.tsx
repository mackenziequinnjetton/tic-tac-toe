import { useState } from "react";
import { BoardRow } from "../BoardRow";

const Board = () => {
  const [ { boardRow1, boardRow2, boardRow3 }, setBoardData ] = useState({
    boardRow1: [
      ".",
      ".",
      "."
    ],
    boardRow2: [
      ".",
      ".",
      "."
    ],
    boardRow3: [
      ".",
      ".",
      "."
    ]
  });

  return (
    <div>
      <BoardRow rowData={boardRow1}/>
      <BoardRow rowData={boardRow2}/>
      <BoardRow rowData={boardRow3}/>
    </div>
  )
};

export default Board;
