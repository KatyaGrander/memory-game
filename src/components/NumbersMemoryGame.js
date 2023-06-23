import React from "react";
import { useState } from "react";
import DifficultyLevel from "./DifficultyLevel";
import { numbersCards } from "../data/numbersCards";
import { numbersSounds } from "../data/numbersSounds";
import "./NumbersMemoryGame.css";
import SingleNumbersCard from "./SingleNumbersCard";
import { correctChoice, wrongChoice, playTargetCards } from "./Utils";

function NumbersMemoryGame() {
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);

  //IMPORTANT -> ADD STATE TO DISABLE BUTTON CLICK UNTILL SOUNDS DONE PLAYING!!!

  const shuffleCards = () => {
    const shuffled = numbersCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };
  // shuffle sounds and pick sounds for the target array according to difficulty level

  const createTargetList = (difficulty) => {
    const target = numbersSounds
      .sort(() => Math.random() - Math.random())
      .slice(0, difficulty);

    playTargetCards(target);
    setTargetCards(target);
    setCurDifficulty(difficulty);
  };

  const handleChoice = (card) => {
    setUserChoice(card);
    console.log(userChoice);

    if (targetCards[counter].id+1 === card.id) {
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
      <h1>מצאו את המספרים הנכונים</h1>
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
        gameCards={numbersCards}
      />

      <div className="cardGrid">
        {cards.map((card) => (
          <SingleNumbersCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}
export default NumbersMemoryGame;
