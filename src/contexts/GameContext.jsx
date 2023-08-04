import React, { createContext } from "react";

export const GameContext = createContext();

class GameProvider extends React.Component {
  state = {
    boardData: {
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
    },
    currentToken: "X",
  }

  setBoardData = (boardData) => {
    this.setState({ boardData });
  }

  setCurrentToken = (currentToken) => {
    this.setState({ currentToken });
  }

  render() {
    return (
        <GameContext.Provider value={{
          ...this.state,
          setBoardData: this.setBoardData,
          setCurrentToken: this.setCurrentToken
        }}>
          {this.props.children}
        </GameContext.Provider>
    );
  }
}

export default GameProvider;