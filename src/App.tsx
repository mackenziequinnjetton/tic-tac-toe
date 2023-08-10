import "./App.scss";
import { GameHeader } from "./components/GameHeader";
import { Board } from "./components/Board";
import GameProvider from "./contexts/GameContext/GameContext";
import { RestartButton } from "./components/RestartButton";

function App() {

  return (
    <>
      <GameProvider>
        <GameHeader />
        <Board />
        <RestartButton />
      </GameProvider>
    </>
  );
}

export default App;
