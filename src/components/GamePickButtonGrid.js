import React, { useState } from "react";

import GamePickButton from "./GamePickButton";

function GamePickButtonGrid({ isButtonGridVisible }) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
    
  };

  return (
    <div>
      <div className="App gameBtnGrid">
        <GamePickButton
          buttonText={"משחק המספרים"}
          makeVisible={makeVisible}
        ></GamePickButton>
        <GamePickButton
          buttonText={"התאימו חפצים"}
          makeVisible={makeVisible}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את החיה"}
          makeVisible={makeVisible}
        ></GamePickButton>
      </div>
     
    </div>
  );
}

export default GamePickButtonGrid;
