import { BoardSpace } from "../BoardSpace";

const BoardRow = ({
  boardRowData,
  boardRowIndices,
}: {
  boardRowData: string[];
  boardRowIndices: number[];
}) => {
  return (
    <div>
      {boardRowData.map((spaceValue, index) => (
        <BoardSpace
          key={index}
          spaceValue={spaceValue}
          spaceIndex={boardRowIndices[index]}
        />
      ))}
    </div>
  );
};

export default BoardRow;
