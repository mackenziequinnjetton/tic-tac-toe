import { BoardSpace } from "../BoardSpace";

const BoardRow = ({ boardRowData, makeMove, currentToken, switchToken }: { 
  boardRowData: { spaceId: number, spaceValue: string }[], 
  makeMove: (spaceId: number) => void, 
  currentToken: string,
  switchToken: () => void
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
          switchToken={switchToken}  
        />
      ))}
    </div>
  )
};

export default BoardRow;
