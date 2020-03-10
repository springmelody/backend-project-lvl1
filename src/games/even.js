import playGame from '../engine.js';

const description = 'Answer \'yes\' if number even otherwise answer \'no\'';
const isEven = (number) => number % 2 === 0;

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const startGame = () => {
  const getGameData = () => {
    const question = randomInteger(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
