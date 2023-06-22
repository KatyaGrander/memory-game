import React from "react";
import { useState } from "react";
import DifficultyLevel from "./DifficultyLevel";
import { oppositesCards } from "../data/oppositesCards";
import { oppositesSounds } from "../data/oppositesSounds";
import "./OppositesMemoryGame.css";
import SingleOppositesCard from "./SingleOppositesCard";
import { playTargetCards } from "./Utils";

function OppositesMemoryGame() {
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [curDifficulty, setCurDifficulty] = useState(0);

  //IMPORTANT -> ADD STATE TO DISABLE BUTTON CLICK UNTILL SOUNDS DONE PLAYING!!!

  const shuffleCards = () => {
    const shuffled = oppositesCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };
  // shuffle sounds and pick sounds for the target array according to difficulty level

  const createTargetList = (difficulty) => {
    const target = oppositesSounds
      .sort(() => Math.random() - Math.random())
      .slice(0, difficulty);

    playTargetCards(target);
    setTargetCards(target);
    setCurDifficulty(difficulty);
  };

  const handleChoice = (card) => {
    setUserChoice(card);
    console.log(userChoice);

    if (targetCards[counter].id === card.id) {
      if (counter < curDifficulty - 1) {
        correctChoice();
        setCounter(counter + 1);
      } else {
        correctChoice();
        setCounter(0);
        createTargetList(curDifficulty);
        shuffleCards();
      }
    } else {
      wrongChoice(targetCards);
      setCounter(0);
    }
  };

  return (
    <div className="OppositesMemoryGame">
      <h1>מצאו את ההפכים</h1>
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
      />

      <div className="cardGrid">
        {cards.map((card) => (
          <SingleOppositesCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default OppositesMemoryGame;
