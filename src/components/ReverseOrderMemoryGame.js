import React from "react";
import { useState } from "react";
import DifficultyLevel from "./DifficultyLevel";
import { reverseOrderCards } from "../data/reverseOrderCards";
import { reverseOrderSounds } from "../data/reverseOrderSounds";
import "./MemoryGame.css";
import SingleCard from "./SingleCard";
import { correctChoice, wrongChoice, playTargetCards } from "./Utils";

function ReverseOrderMemoryGame() {
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);

  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);

  //IMPORTANT -> ADD STATE TO DISABLE BUTTON CLICK UNTILL SOUNDS DONE PLAYING!!!

  const shuffleCards = () => {
    const shuffled = reverseOrderCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };
  // shuffle sounds and pick sounds for the target array according to difficulty level

  const createTargetList = (difficulty) => {
    const target = reverseOrderSounds
      .sort(() => Math.random() - Math.random())
      .slice(0, difficulty);

    playTargetCards(target);
    setTargetCards(target.reverse());
    setCurDifficulty(difficulty);
  };

  const handleChoice = (card) => {
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
    <div className="ReverseOrderMemoryGame">
      <h1>לחצו על הכפתורים בסדר הפוך</h1>
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
        gameCards={reverseOrderCards}
      />

      <div className="cardGrid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}
export default ReverseOrderMemoryGame;
