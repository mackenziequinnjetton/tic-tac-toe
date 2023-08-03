import { BoardSpace } from "../BoardSpace";

const BoardRow = ({ rowData }: { rowData: string[] }) => {
  return (
    <div>
      <BoardSpace spaceData={rowData[0]}/>
      <BoardSpace spaceData={rowData[1]}/>
      <BoardSpace spaceData={rowData[2]}/>
    </div>
  )
};

export default BoardRow;
