import React from "react";

function GamePickButton({ buttonText, makeVisible, gameName, setGameName }) {

  return (
    <div>
      <div>
        <button
          className="selectGameBtn sGBtn4"
          onClick={() => {
            makeVisible();
            setGameName(gameName);
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default GamePickButton;
