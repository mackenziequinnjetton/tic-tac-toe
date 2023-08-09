import React, { createContext, useState } from "react";

interface GameContextDataTypes {
  boardData: string[];
  currentToken: string;
  makeMove: (spaceIndex: number) => void;
  winner: boolean;
}

export const GameContext = createContext<GameContextDataTypes>(
  {} as GameContextDataTypes,
);

const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [boardData, setBoardData] = useState([
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
  ]);

  const [currentToken, setCurrentToken] = useState("X");

  const [winner, setWinner] = useState(false);

  const makeMove = (spaceIndex: number) => {
    if (spaceNotOccupied(spaceIndex)) {
      const newBoardData = updateBoardData(spaceIndex);
      setBoardData(newBoardData);
      const newWinner = checkWinner(newBoardData);
      if (!newWinner) {
        switchToken(currentToken);
      }
    }
  };

  const spaceNotOccupied = (spaceIndex: number) => {
    return boardData[spaceIndex] === ".";
  };

  const updateBoardData = (spaceIndex: number) => {
    const newBoardData = [...boardData];
    newBoardData[spaceIndex] = currentToken;
    return newBoardData;
  };

  const switchToken = (currentToken: string) => {
    setCurrentToken(currentToken === "X" ? "O" : "X");
  };

  const checkWinner = (newBoardData: string[]) => {
    const filteredBoardData = newBoardData.filter(
      (space) => space === currentToken,
    );
    const newWinner =
      filteredBoardData.length >= 3 &&
      (checkRows(newBoardData) ||
        checkColumns(newBoardData) ||
        checkDiagonals(newBoardData));
    if (newWinner) {
      setWinner(true);
    }
    return newWinner;
  };

  const checkRows = (newBoardData: string[]) => {
    const row1 = newBoardData.filter(
      (space, index) => space === currentToken && [0, 1, 2].includes(index),
    );
    const row2 = newBoardData.filter(
      (space, index) => space === currentToken && [3, 4, 5].includes(index),
    );
    const row3 = newBoardData.filter(
      (space, index) => space === currentToken && [6, 7, 8].includes(index),
    );
    return row1.length === 3 || row2.length === 3 || row3.length === 3;
  };

  const checkColumns = (newBoardData: string[]) => {
    const column1 = newBoardData.filter(
      (space, index) => space === currentToken && [0, 3, 6].includes(index),
    );
    const column2 = newBoardData.filter(
      (space, index) => space === currentToken && [1, 4, 7].includes(index),
    );
    const column3 = newBoardData.filter(
      (space, index) => space === currentToken && [2, 5, 8].includes(index),
    );
    return column1.length === 3 || column2.length === 3 || column3.length === 3;
  };

  const checkDiagonals = (newBoardData: string[]) => {
    const diagonal1 = newBoardData.filter(
      (space, index) => space === currentToken && [0, 4, 8].includes(index),
    );
    const diagonal2 = newBoardData.filter(
      (space, index) => space === currentToken && [2, 4, 6].includes(index),
    );
    return diagonal1.length === 3 || diagonal2.length === 3;
  };

  return (
    <GameContext.Provider
      value={{
        boardData,
        currentToken,
        makeMove,
        winner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
