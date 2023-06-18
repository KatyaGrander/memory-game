import React, { useState } from "react";

import "./App.css";

import GamePickButtonGrid from "./components/GamePickButtonGrid";
import GamePad from "./components/GamePad";

function App() {
  const [visibleGrid, setVisibleGrid] = useState("true");

  const isButtonGridVisible = () => {
    setVisibleGrid(!visibleGrid);
  };

  return (
    visibleGrid ? 
      <GamePickButtonGrid isButtonGridVisible={isButtonGridVisible} /> :
      <GamePad isButtonGridVisible={isButtonGridVisible}/>
    );
}
export default App;
