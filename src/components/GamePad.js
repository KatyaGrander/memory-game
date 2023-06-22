import React from "react";
import { useState } from "react";
import AnimalsMemoryGame from "./AnimalsMemoryGame";
import HomeButton from "./HomeButton";

function GamePad({ isButtonGridVisible, gameName }) {
  const [isVisible, setToVisible] = useState(false);

  const makeVisible = () => {
    setToVisible(!isVisible);
    isButtonGridVisible();
  };

  const curGameName = gameName;

  return (
    <div>
      <div>
        <HomeButton makeVisible={makeVisible} />
      </div>
<p> curGameName : {curGameName}</p>
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
