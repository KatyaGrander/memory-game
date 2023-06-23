import React from "react";
import "./HomeButton.css"

function HomeButton({makeVisible}) {

  return (
    <>
      <button className="homeBtn" onClick={makeVisible}>חזור</button>
    </>
  );
}

export default HomeButton;
