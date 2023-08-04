const BoardSpace = ({ spaceId, spaceValue, makeMove, currentToken, switchToken }: { 
  spaceId: number, 
  spaceValue: string,
  makeMove: (spaceId: number) => void,
  currentToken: string,
  switchToken: () => void
}) => {

const onButtonClick = () => {
  makeMove(spaceId);
  switchToken();
};

  return (
    <button id={`${spaceId}`} className="boardSpace" onClick={onButtonClick}>
      {spaceValue}
    </button>
  )
};

export default BoardSpace;
