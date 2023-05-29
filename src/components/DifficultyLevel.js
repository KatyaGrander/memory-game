import React from "react";
import "./DifficultyLevel.css";

function DifficultyLevel({ createTargetList, shuffleCards }) {
  return (
    <div className="LevelSelect">
      <button
        className="levelBtn lb4"
        onClick={() => {
         
          createTargetList(5);
          shuffleCards();
        }}
      >
        4
      </button>
      <button
        className="levelBtn lb3"
        onClick={() => {
        
          createTargetList(4);
          shuffleCards();
        }}
      >
        3
      </button>
      <button
        className="levelBtn lb2"
        onClick={() => {
        
          createTargetList(3);
          shuffleCards();
        }}
      >
        2
      </button>
      <button
        className="levelBtn lb1"
        onClick={() => {
          
          createTargetList(2);
          shuffleCards();
        }}
      >
        1
      </button>
      <label>רמה</label>
    </div>
  );
}

export default DifficultyLevel;
/*
        <div>
          <button className="homeBtn">חזור</button>
          <button className="playBtn"
          onClick={}
          
          >למשחק</button>
        </div>*/
