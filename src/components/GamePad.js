import React from "react";
import { useState } from "react";
import HomeButton from "./HomeButton";

function GamePad({ isButtonGridVisible, gameName }) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  const CurrentGame = require("./" + gameName).default;

  return (
    <div>
      <div>
        <HomeButton makeVisible={makeVisible} />
      </div>

      <CurrentGame />
    </div>
  );
}

export default GamePad;

/*        <button
          className="playBtn"
          //  onClick={}
        >
          למשחק
        </button>*/
