import React from "react";


function HomeButton({makeVisible}) {

  return (
    <div>
      <button className="homeBtn" onClick={makeVisible}>חזור</button>
    </div>
  );
}

export default HomeButton;
