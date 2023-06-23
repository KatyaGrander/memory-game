import React, { useState } from "react";

import GamePickButton from "./GamePickButton";
import { gameNames } from "../data/gameNames";

function GamePickButtonGrid({ isButtonGridVisible, setGameName }) {
  const [isVisible, setToVisible] = useState(false);
  
  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  return (
    <>
      <div className="App gameBtnGrid">
        <GamePickButton
          buttonText={"משחק המספרים"}
          makeVisible={makeVisible}
          gameName={gameNames[0].name}
          setGameName={setGameName}
          
        ></GamePickButton>
        <GamePickButton
          buttonText={"התאימו חפצים"}
          makeVisible={makeVisible}
          gameName={gameNames[1].name}
          setGameName={setGameName}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את הצבעים"}
          makeVisible={makeVisible}
          gameName={gameNames[2].name}
          setGameName={setGameName}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את ההפכים"}
          makeVisible={makeVisible}
          gameName={gameNames[3].name}
          setGameName={setGameName}
        ></GamePickButton>
        <GamePickButton
          buttonText={"מצאו את החיה"}
          makeVisible={makeVisible}
          gameName={gameNames[4].name}
          setGameName={setGameName}
        ></GamePickButton>
        <GamePickButton
          buttonText={"התאימו למשפחה"}
          makeVisible={makeVisible}
          gameName={gameNames[5].name}
          setGameName={setGameName}
        ></GamePickButton>
        <GamePickButton
          buttonText={"זכרו בסדר הפוך"}
          makeVisible={makeVisible}
          gameName={gameNames[6].name}
          setGameName={setGameName}
        ></GamePickButton>
      </div>
    </>
  );
}

export default GamePickButtonGrid;
