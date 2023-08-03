import { BoardSpace } from "../BoardSpace";

const BoardRow = ({ boardRowData }: { boardRowData: { spaceId: number, spaceValue: string }[] }) => {

  return (
    <div>
      { boardRowData.map(({ spaceId, spaceValue }, index) => (
        <BoardSpace key={index} spaceId={spaceId} spaceValue={spaceValue} />
      ))}
    </div>
  )
};

export default BoardRow;
