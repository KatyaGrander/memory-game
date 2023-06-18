import React from "react";


function GamePickButton({ buttonText, makeVisible }) {
  return (
    <div>
      <div>
        <button className="selectGameBtn sGBtn4" onClick={makeVisible}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default GamePickButton;

