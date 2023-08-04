// TODO: Split part of this function off into helper functions
// const makeMove = (spaceId: number, spaceValue: string) => {
//   if (spaceNotOccupied(spaceValue)) {
//     const newBoardData = { ...boardData };
//     const boardRowNumber = Math.ceil(spaceId / 3);
//     const newBoardRow = boardRowNumber === 1 
//       ? newBoardData.boardRow1 
//       : boardRowNumber === 2 
//       ? newBoardData.boardRow2 
//       : newBoardData.boardRow3;
//     const newBoardSpace = newBoardRow[(spaceId - (3 * (boardRowNumber - 1))) - 1];
//     newBoardSpace.spaceValue = currentToken;
//     setBoardData(newBoardData);
//     switchToken();
//   }
// };

const spaceNotOccupied = (spaceValue: string) => {
  return spaceValue === ".";
};

const switchToken = (currentToken: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
  setter(currentToken === "X" ? "O" : "X");
};

export { spaceNotOccupied, switchToken };