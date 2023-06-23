import React from "react";
import "./SingleOppositesCard.css";
import SoundButton from "./SoundButton";

function SingleOppositesCard({ card, handleChoice }) {
  //returns single card template

  const clickHandler = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
       <SoundButton card = {card}/>
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