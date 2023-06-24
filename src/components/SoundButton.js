import React from "react";
import "./SoundButton.css";
import { oppositesSoundsForButton } from "../data/oppositesSoundsForButton";

function SoundButton({ card }) {
  const playSound = () => {
    const sound = oppositesSoundsForButton.find((sound) => {
      return sound.id === card.id;
    });
    const audio = new Audio(sound.src);
    setTimeout(() => audio.play(), 1000);
    clearTimeout();
  };

  return (
    <>
      <button className="soundButton" onClick={playSound}><img src="/img/soundIcon.jpeg" alt="השמיע קול" /></button>
    </>
  );
}

export default SoundButton;
