import React, { useState } from "react";

import "./App.css";

import GamePickButtonGrid from "./components/GamePickButtonGrid";
import GamePad from "./components/GamePad";

function App() {
  const [visibleGrid, setVisibleGrid] = useState("true");
  const [gameName, setGameName] = useState(null);

  const isButtonGridVisible = () => {
    setVisibleGrid(!visibleGrid);
  };

  return visibleGrid ? (
    <GamePickButtonGrid
      isButtonGridVisible={isButtonGridVisible}
      setGameName={setGameName}
    />
  ) : (
    <GamePad isButtonGridVisible={isButtonGridVisible} gameName={gameName} />
  );
}
export default App;
