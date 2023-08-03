const BoardSpace = ({ spaceId, spaceValue }: { spaceId: number, spaceValue: string }) => {

  return (
    <button id={`${spaceId}`} className="boardSpace">
      {spaceValue}
    </button>
  )
};

export default BoardSpace;
