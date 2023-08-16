import React, { createContext, useState, useEffect } from "react";

interface GameContextDataTypes {
  boardData: string[];
  currentToken: string;
  makeMove: (spaceIndex: number) => void;
  winner: boolean;
  draw: boolean;
  restartGame: () => void;
  loadBoardDataFromHistory: (index: number) => void;
  boardDataHistoryLength: number;
  currentMoveNumber: number;
}

export const GameContext = createContext<GameContextDataTypes>(
  {} as GameContextDataTypes,
);

const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [boardData, setBoardData] = useState(() => {
    const boardDataFromLocalStorage = localStorage.getItem("boardData");
    if (boardDataFromLocalStorage && boardDataFromLocalStorage !== "undefined") {
      return JSON.parse(boardDataFromLocalStorage);
    }
    return [
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
    ];
  });

  const [currentToken, setCurrentToken] = useState(() => {
    const currentTokenFromLocalStorage = localStorage.getItem("currentToken");
    if (currentTokenFromLocalStorage && currentTokenFromLocalStorage !== "undefined") {
      return JSON.parse(currentTokenFromLocalStorage);
    }
    return "X";
  });

  const [winner, setWinner] = useState(() => {
    const winnerFromLocalStorage = localStorage.getItem("winner");
    if (winnerFromLocalStorage && winnerFromLocalStorage !== "undefined") {
      return JSON.parse(winnerFromLocalStorage);
    }
    return false;
  });

  const [ draw, setDraw ] = useState(() => {
    const drawFromLocalStorage = localStorage.getItem("draw");
    if (drawFromLocalStorage && drawFromLocalStorage !== "undefined") {
      return JSON.parse(drawFromLocalStorage);
    }
    return false;
  });

  const [boardDataHistory, setBoardDataHistory] = useState(() => {
    const boardDataHistoryFromLocalStorage = localStorage.getItem("boardDataHistory");
    if (boardDataHistoryFromLocalStorage && boardDataHistoryFromLocalStorage !== "undefined") {
      return JSON.parse(boardDataHistoryFromLocalStorage);
    }
    return [[".", ".", ".", ".", ".", ".", ".", ".", "."]];
  });

  const [currentMoveNumber, setCurrentMoveNumber] = useState(() => {
    const currentMoveNumberFromLocalStorage = localStorage.getItem("currentMoveNumber");
    if (currentMoveNumberFromLocalStorage && currentMoveNumberFromLocalStorage !== "undefined") {
      return JSON.parse(currentMoveNumberFromLocalStorage);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(boardData));
    localStorage.setItem("currentToken", JSON.stringify(currentToken));
    localStorage.setItem("winner", JSON.stringify(winner));
    localStorage.setItem("draw", JSON.stringify(draw));
    localStorage.setItem("boardDataHistory", JSON.stringify(boardDataHistory));
    localStorage.setItem("currentMoveNumber", JSON.stringify(currentMoveNumber));
  }, [boardData, currentToken, winner, draw, boardDataHistory, currentMoveNumber]);

  const makeMove = (spaceIndex: number) => {
    if (!winner && !draw && spaceNotOccupied(spaceIndex)) {
      const newBoardData = updateBoardData(spaceIndex);
      setBoardData(newBoardData);
      const newWinner = checkWinner(newBoardData);
      const newDraw = checkDraw(newBoardData);
      updateStatesIfGameNotOver(newWinner, newDraw, newBoardData);
      enableRestartButton();
    }
  };

  const updateStatesIfGameNotOver = (
    newWinner: boolean,
    newDraw: boolean,
    newBoardData: string[],
  ) => {
    if (!newWinner && !newDraw) {
      switchToken(currentToken);
      const newMoveNumber = currentMoveNumber + 1;
      setCurrentMoveNumber(newMoveNumber);
      updateBoardDataHistory(newBoardData, newMoveNumber);
    }
  };

  const enableRestartButton = () => {
    const restartButton = document.getElementById("restart-button");
    if (restartButton && restartButton.hasAttribute("disabled")) {
      restartButton.removeAttribute("disabled");
    }
  };

  const disableRestartButton = () => {
    const restartButton = document.getElementById("restart-button");
    if (restartButton) {
      restartButton.setAttribute("disabled", "true");
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

  const checkDraw = (newBoardData: string[]) => {
    const filteredBoardData = newBoardData.filter(
      (space) => space === "X" || space === "O",
    );
    const newDraw = filteredBoardData.length === 9;
    if (newDraw) {
      setDraw(true);
    }
    return newDraw;
  };

  const updateBoardDataHistory = (newBoardData: string[], newMoveNumber: number) => {
    boardDataHistory.push(newBoardData);

    if (newBoardData.join("") === boardDataHistory[newMoveNumber].join("")) {
      setBoardDataHistory(boardDataHistory.slice(0, newMoveNumber + 1));
    }
    else {
      setBoardDataHistory([...boardDataHistory.slice(0, newMoveNumber), newBoardData]);
    }
  };

  const restartGame = () => {
    setBoardData([".", ".", ".", ".", ".", ".", ".", ".", "."]);
    setCurrentToken("X");
    setWinner(false);
    setDraw(false);
    setBoardDataHistory([[".", ".", ".", ".", ".", ".", ".", ".", "."]]);
    setCurrentMoveNumber(0);
    
    disableRestartButton();
  };

  const loadBoardDataFromHistory = (historyMoveNumber: number) => {
    const newBoardData = boardDataHistory[historyMoveNumber];
    setBoardData(newBoardData);
    checkWhatCurrentTokenShouldBe(historyMoveNumber);
    setCurrentMoveNumber(historyMoveNumber);
  };

  const checkWhatCurrentTokenShouldBe = (historyMoveNumber: number) => {
    if (historyMoveNumber <= currentMoveNumber && (currentMoveNumber - historyMoveNumber) % 2 === 1) {
      switchToken(currentToken);
    } else if (historyMoveNumber > currentMoveNumber && (historyMoveNumber - currentMoveNumber) % 2 === 1) {
      switchToken(currentToken);
    }
  };

  return (
    <GameContext.Provider
      value={{
        boardData,
        currentToken,
        makeMove,
        winner,
        draw,
        restartGame,
        loadBoardDataFromHistory,
        boardDataHistoryLength: boardDataHistory.length,
        currentMoveNumber,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
