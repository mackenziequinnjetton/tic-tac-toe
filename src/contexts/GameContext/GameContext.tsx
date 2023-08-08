import React, { createContext, useState } from "react";

interface GameContextDataTypes {
  boardData: {
    boardRow1: {
      spaceId: number;
      spaceValue: string;
    }[],
    boardRow2: {
      spaceId: number;
      spaceValue: string;
    }[],
    boardRow3: {
      spaceId: number;
      spaceValue: string;
    }[]
  };
  currentToken: string;
  makeMove: (spaceId: number, spaceValue: string) => void;
}

export const GameContext = createContext<GameContextDataTypes>({} as GameContextDataTypes);

const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [ boardData, setBoardData ] = useState({
    boardRow1: [
      { spaceId: 1, spaceValue: "." },
      { spaceId: 2, spaceValue: "." },
      { spaceId: 3, spaceValue: "." }
    ],
    boardRow2: [
      { spaceId: 4, spaceValue: "." },
      { spaceId: 5, spaceValue: "." },
      { spaceId: 6, spaceValue: "." }
    ],
    boardRow3: [
      { spaceId: 7, spaceValue: "." },
      { spaceId: 8, spaceValue: "." },
      { spaceId: 9, spaceValue: "." }
    ]
  });

  const [ currentToken, setCurrentToken ] = useState("X");

  // TODO: Split part of this function off into helper functions
  const makeMove = (spaceId: number, spaceValue: string) => {
    if (spaceNotOccupied(spaceValue)) {
      const newBoardData = updateBoardData(spaceId);
      setBoardData(newBoardData);
      switchToken(currentToken);
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

  

  return (
      <GameContext.Provider value={{
        boardData,
        currentToken,
        makeMove
      }}>
        {children}
      </GameContext.Provider>
  );
}

export default GameProvider;