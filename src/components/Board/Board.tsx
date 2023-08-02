import { BoardSpace } from "../BoardSpace";

const Board = () => {
  return (
    <div>
      <div className="boardRow">
        <BoardSpace />
        <BoardSpace />
        <BoardSpace />
      </div>
      <div className="boardRow">
        <BoardSpace />
        <BoardSpace />
        <BoardSpace />
      </div>
      <div className="boardRow">
        <BoardSpace />
        <BoardSpace />
        <BoardSpace />
      </div>
    </div>
  )
};

export default Board;
