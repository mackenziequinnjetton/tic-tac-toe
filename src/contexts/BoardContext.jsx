import React, { createContext, useState } from 'react';

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState({
    boardSpaces: [
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
      { id: 9, value: null }
    ],
  });

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;