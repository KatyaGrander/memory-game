import React from "react";
import "./GamePickButton.css"

function GamePickButton({ buttonText, makeVisible, gameName, setGameName }) {
  return (
    <>
      <button
        className="selectGameBtn sGBtn4"
        onClick={() => {
          makeVisible();
          setGameName(gameName);
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export default GamePickButton;
