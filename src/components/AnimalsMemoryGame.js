import React from "react";
import { useState } from "react";
import DifficultyLevel from "./DifficultyLevel";
import { animalCards } from "../data/animalCards";
import { animalSounds } from "../data/animalSounds";
import "./AnimalsMemoryGame.css";
import SingleAnimalCard from "./SingleAnimalCard";
import { correctChoice, wrongChoice, playTargetCards } from "./Utils";

function AnimalsMemoryGame() {
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [curDifficulty, setCurDifficulty] = useState(0);
  const [counter, setCounter] = useState(0);

  //IMPORTANT -> ADD STATE TO DISABLE BUTTON CLICK UNTILL SOUNDS DONE PLAYING!!!

  const shuffleCards = () => {
    const shuffled = animalCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };
  // shuffle sounds and pick sounds for the target array according to difficulty level

  const createTargetList = (difficulty) => {
    const target = animalSounds
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
    <div className="AnimalsMemoryGame">
      <h1>מצאו את החיות המסתתרות לפי הסדר</h1>
      <DifficultyLevel
        createTargetList={createTargetList}
        shuffleCards={shuffleCards}
        gameCards = {animalCards}
      />

      <div className="cardGrid">
        {cards.map((card) => (
          <SingleAnimalCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}
export default AnimalsMemoryGame;
