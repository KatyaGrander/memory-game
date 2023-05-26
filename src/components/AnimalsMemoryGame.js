import React from "react";
import { useState } from "react";
import DifficultyLevel from "./DifficultyLevel";
import { animalCards } from "../data/animalCards";
import { animalSounds } from "../data/animalSounds";
import "./AnimalsMemoryGame.css";
import SingleAnimalCard from "./SingleAnimalCard";

function AnimalsMemoryGame() {
  const [cards, setCards] = useState([]);
  const [targetCards, setTargetCards] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const wrongChoiceSound = new Audio("./sounds/failure.mp3");
  const correctChoiceSound = new Audio("./sounds/success.mp3");

  const shuffleCards = () => {
    //shuffle cards for the card grid
    const shuffled = animalCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const createTargetList = (difficulty) => {
    // shuffle sounds and pick first two for the target array
    const target = animalSounds
      .sort(() => Math.random() - Math.random())
      .slice(0, difficulty);
    playTargetCards(target);

    setTargetCards(target);
  };

  const playTargetCards = (target) => {
    for (let i = 0; i < target.length; i++) {
      const audio = new Audio(target[i].src);
      setTimeout(() => audio.play(), 2000 * i);
    }
    clearTimeout();
  };

  const handleChoice = (card) => {
    setUserChoice(card);
    console.log(userChoice);

    let targetElement = null;

    //check if sounds array has element with id equal to user's choice
    const hasElement = targetCards.some((element) => {
      if (element.id === card.id) {
        targetElement = element;
        return true;
      }
      return false;
    });

    //check if hasElement and if it's at index 0 of the sound array.
    //if so, remove first element of the sounds array
    if (targetCards.length > 0) {
      if (hasElement && targetCards.indexOf(targetElement) === 0) {
        correctChoiceSound.play();
        targetCards.shift();
      } else {
        wrongChoiceSound.play();
      }

      if (targetCards.length === 0) {
        createTargetList();
        shuffleCards();
      }
    }
  };

  return (
    <div className="AnimalsMemoryGame">
      <h1>מצאו את החיות המסתתרות לפי הסדר</h1>
      <DifficultyLevel createTargetList={createTargetList} shuffleCards={shuffleCards}/>


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

  /* <button
className="playGameBtn"
onClick={() => {
  createTargetList();
  shuffleCards();
}}
>
התחילו במשחק
</button>*/