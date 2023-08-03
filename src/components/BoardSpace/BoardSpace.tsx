const BoardSpace = ({ spaceData }: { spaceData: string }) => {

  return (
    <button className="boardSpace">
      { spaceData }
    </button>
  )
};

export default BoardSpace;
