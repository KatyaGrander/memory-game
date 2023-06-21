import React from "react";
import { useState } from "react";
import AnimalsMemoryGame from "./AnimalsMemoryGame";
import HomeButton from "./HomeButton";

function GamePad({ isButtonGridVisible }) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
    console.log("hey home");
  };

  return (
    <div>
      <div>
        <HomeButton makeVisible={makeVisible} />
      </div>

      <AnimalsMemoryGame />
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
