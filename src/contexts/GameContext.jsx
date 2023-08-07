import React, { createContext, useState } from "react";

export const GameContext = createContext();

const GameProvider = (props) => {
  const [ boardData, setboardData ] = useState({
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

  return (
      <GameContext.Provider value={{
        boardData,
        setboardData,
        currentToken,
        setCurrentToken
      }}>
        {props.children}
      </GameContext.Provider>
  );
}

export default GameProvider;