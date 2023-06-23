import React from "react";
import "./SingleOppositesCard.css";

function SingleOppositesCard({ card, handleChoice }) {
  //returns single card template

  const clickHandler = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img
          
          src={card.src}
          alt="תוכן הכרטיסיה"
          onClick={clickHandler}
        />
       
      </div>
    </div>
  );
}

export default SingleOppositesCard;