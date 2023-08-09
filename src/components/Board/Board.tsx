import { useContext } from "react";
import { BoardRow } from "../BoardRow";
import { GameContext } from "../../contexts/GameContext/GameContext";

const Board = () => {
  const { boardData } = useContext(GameContext);
  const boardRows = [
    {
      boardRowData: boardData.slice(0, 3),
      boardRowIndices: [0, 1, 2]
    }, 
    {
      boardRowData: boardData.slice(3, 6),
      boardRowIndices: [3, 4, 5]
    },
    {
      boardRowData: boardData.slice(6, 9),
      boardRowIndices: [6, 7, 8]
    }
  ];

  return (
    <div>
      { boardRows.map((boardRowElem, index) => (
        <BoardRow 
          key={index} 
          boardRowData={boardRowElem.boardRowData}
          boardRowIndices={boardRowElem.boardRowIndices} 
        />
      ))}
    </div>
  )
};

export default Board;
