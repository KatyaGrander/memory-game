import React from "react";
import "./SingleAnimalCard.css";


function SingleAnimalCard({ card, handleChoice }) {
  //returns single card template

  const clickHandler = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
     
      <div>
        <img
          className="frontCard"
          src={card.src}
          alt="תוכן הכרטיסיה"
          onClick={clickHandler}
        />
        <img className="backCard" src="/img/cover.jpeg" alt="שיחים" />
      </div>
    </div>
  );
}

export default SingleAnimalCard;
