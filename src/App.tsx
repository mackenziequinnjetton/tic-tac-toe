import "./App.scss";
import { GameHeader } from "./components/GameHeader";
import { Board } from "./components/Board";
import GameProvider from "./contexts/GameContext/GameContext";
import { RestartButton } from "./components/RestartButton";
import { MoveButton } from "./components/MoveButton";

function App() {
  return (
    <>
      <GameProvider>
        <GameHeader />
        <div>
          <Board />
          <div>
            {[...Array(10)].map((_, index) => (
              <MoveButton key={index} move={index} />
            ))}
          </div>
          <RestartButton />
        </div> 
      </GameProvider>
    </>
  );
}

export default App;
