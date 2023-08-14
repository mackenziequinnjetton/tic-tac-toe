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
            <MoveButton move={0} />
          </div>
          <RestartButton />
        </div>
        
      </GameProvider>
    </>
  );
}

export default App;
