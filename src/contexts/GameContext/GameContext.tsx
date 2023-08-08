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
  setBoardData: React.Dispatch<React.SetStateAction<{
    boardRow1: {
      spaceId: number;
      spaceValue: string;
    }[];
    boardRow2: {
      spaceId: number;
      spaceValue: string;
    }[];
    boardRow3: {
      spaceId: number;
      spaceValue: string;
    }[];
  }>>;
  currentToken: string;
  setCurrentToken: React.Dispatch<React.SetStateAction<string>>;
  spaceNotOccupied: (spaceValue: string) => boolean;
  switchToken: (currentToken: string) => void;
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

  const spaceNotOccupied = (spaceValue: string) => {
    return spaceValue === ".";
  };

  const switchToken = (currentToken: string) => {
    setCurrentToken(currentToken === "X" ? "O" : "X");
  };

  return (
      <GameContext.Provider value={{
        boardData,
        setBoardData,
        currentToken,
        setCurrentToken,
        spaceNotOccupied,
        switchToken
      }}>
        {children}
      </GameContext.Provider>
  );
}

export default GameProvider;