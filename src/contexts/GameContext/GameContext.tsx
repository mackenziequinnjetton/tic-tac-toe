import React, { createContext, useState } from "react";

interface GameContextDataTypes {
  boardData: [
    {
      spaceId: number;
      spaceValue: string;
    }
  ];
  currentToken: string;
  makeMove: (spaceId: number, spaceValue: string) => void;
  winner: boolean;
}

export const GameContext = createContext<GameContextDataTypes>({} as GameContextDataTypes);

const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [ boardData, setBoardData ] = useState([
    { spaceId: 1, spaceValue: "." },
    { spaceId: 2, spaceValue: "." },
    { spaceId: 3, spaceValue: "." },
    { spaceId: 4, spaceValue: "." },
    { spaceId: 5, spaceValue: "." },
    { spaceId: 6, spaceValue: "." },
    { spaceId: 7, spaceValue: "." },
    { spaceId: 8, spaceValue: "." },
    { spaceId: 9, spaceValue: "." }
  ]);

  const [ currentToken, setCurrentToken ] = useState("X");

  const [ winner, setWinner ] = useState(false);

  const makeMove = (spaceId: number, spaceValue: string) => {
    if (spaceNotOccupied(spaceValue)) {
      const newBoardData = updateBoardData(spaceId);
      setBoardData(newBoardData);
      checkWinner();
      if (!winner) {
        switchToken(currentToken);
      }
    }
  };

  const updateBoardData = (spaceId: number) => {
    const newBoardData = { ...boardData };
    const boardRowNumber = Math.ceil(spaceId / 3);
    const newBoardRow = boardRowNumber === 1 
      ? newBoardData.boardRow1 
      : boardRowNumber === 2 
      ? newBoardData.boardRow2 
      : newBoardData.boardRow3;
    const newBoardSpace = newBoardRow[(spaceId - (3 * (boardRowNumber - 1))) - 1];
    newBoardSpace.spaceValue = currentToken;
    return newBoardData;
  }

  const spaceNotOccupied = (spaceValue: string) => {
    return spaceValue === ".";
  };

  const switchToken = (currentToken: string) => {
    setCurrentToken(currentToken === "X" ? "O" : "X");
  };
  
  const boardDataAsArray = [
    ...boardData.boardRow1,
    ...boardData.boardRow2,
    ...boardData.boardRow3
  ]

  const checkWinner = () => {
    const filteredBoardDataArray = boardDataAsArray.filter(space => space.spaceValue === currentToken)
    setWinner(filteredBoardDataArray.length >= 3 && (checkRows(filteredBoardDataArray) || checkColumns(filteredBoardDataArray) || checkDiagonals(filteredBoardDataArray)));
  }

  const checkRows = (filteredBoardDataArray: { spaceId: number; spaceValue: string; }[]) => {
    const row1 = filteredBoardDataArray.filter(space => space.spaceId <= 3);
    const row2 = filteredBoardDataArray.filter(space => space.spaceId > 3 && space.spaceId <= 6);
    const row3 = filteredBoardDataArray.filter(space => space.spaceId > 6);
    return row1.length === 3 || row2.length === 3 || row3.length === 3;
  }

  const checkColumns = (filteredBoardDataArray: { spaceId: number; spaceValue: string; }[]) => {
    const column1 = filteredBoardDataArray.filter(space => space.spaceId === 1 || space.spaceId === 4 || space.spaceId === 7);
    const column2 = filteredBoardDataArray.filter(space => space.spaceId === 2 || space.spaceId === 5 || space.spaceId === 8);
    const column3 = filteredBoardDataArray.filter(space => space.spaceId === 3 || space.spaceId === 6 || space.spaceId === 9);
    return column1.length === 3 || column2.length === 3 || column3.length === 3;
  }

  const checkDiagonals = (filteredBoardDataArray: { spaceId: number; spaceValue: string; }[]) => {
    const diagonal1 = filteredBoardDataArray.filter(space => space.spaceId === 1 || space.spaceId === 5 || space.spaceId === 9);
    const diagonal2 = filteredBoardDataArray.filter(space => space.spaceId === 3 || space.spaceId === 5 || space.spaceId === 7);
    return diagonal1.length === 3 || diagonal2.length === 3;
  }

  return (
      <GameContext.Provider value={{
        boardData,
        currentToken,
        makeMove,
        winner,
      }}>
        {children}
      </GameContext.Provider>
  );
}

export default GameProvider;