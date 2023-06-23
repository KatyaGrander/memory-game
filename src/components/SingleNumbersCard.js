import React from "react";
import "./SingleNumbersCard.css";

function SingleNumbersCard({ card, handleChoice }) {
  //returns single card template

  const clickHandler = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img src={card.src} alt="תוכן הכרטיסיה" onClick={clickHandler} />
      </div>
    </div>
  );
}

export default SingleNumbersCard;
