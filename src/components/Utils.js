const wrongChoiceSound = new Audio("./sounds/failure.mp3");
const correctChoiceSound = new Audio("./sounds/success.mp3");

export const playTargetCards = (target) => {
  for (let i = 0; i < target.length; i++) {
    const audio = new Audio(target[i].src);
    setTimeout(() => audio.play(), 2000 * i);
  }
  clearTimeout();
  console.log("play");
};

export const wrongChoice = (targetCards) => {
  wrongChoiceSound.play();
  playTargetCards(targetCards);
};

export const correctChoice = () => {
  correctChoiceSound.play();
  
};
