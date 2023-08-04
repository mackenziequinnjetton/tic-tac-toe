import { BoardSpace } from "../BoardSpace";

const BoardRow = ({ boardRowData, makeMove, currentToken }: { 
  boardRowData: { spaceId: number, spaceValue: string }[], 
  makeMove: (spaceId: number, spaceValue: string) => void,
  currentToken: string,
}) => {

  return (
    <div>
      { boardRowData.map(({ spaceId, spaceValue }, index) => (
        <BoardSpace 
          key={index} 
          spaceId={spaceId} 
          spaceValue={spaceValue} 
          makeMove={makeMove}
          currentToken={currentToken}  
        />
      ))}
    </div>
  )
};

export default BoardRow;
