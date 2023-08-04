const BoardSpace = ({ spaceId, spaceValue, makeMove, currentToken }: { 
  spaceId: number, 
  spaceValue: string,
  makeMove: (spaceId: number, spaceValue: string) => void,
  currentToken: string,
}) => {

const onButtonClick = () => {
  makeMove(spaceId, spaceValue);
};

  return (
    <button id={`${spaceId}`} className="boardSpace" onClick={onButtonClick}>
      {spaceValue}
    </button>
  )
};

export default BoardSpace;
