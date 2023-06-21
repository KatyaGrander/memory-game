import React from "react";
import "./DifficultyLevel.css";
import { animalCards } from "../data/animalCards";



function DifficultyLevel({ createTargetList, shuffleCards}) {
  
  
  const handleClick = (difficulty) => {
    createTargetList(difficulty,animalCards);
    shuffleCards();
  };

  return (
    <div className="LevelSelect">
      <button className="levelBtn lb4" onClick={() => handleClick(5)}>
        4
      </button>
      <button className="levelBtn lb3" onClick={() => handleClick(4)}>
        3
      </button>
      <button className="levelBtn lb2" onClick={() => handleClick(3)}>
        2
      </button>
      <button className="levelBtn lb1" onClick={() => handleClick(2)}>
        1
      </button>
      <label>רמה</label>
    </div>
  );
}

export default DifficultyLevel;