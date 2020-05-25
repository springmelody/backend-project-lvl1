import playGame from '../engine.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (firstValue, secondValue) => {
  if (secondValue > 0) {
    return getGcd(secondValue, firstValue % secondValue);
  }
  return Math.abs(firstValue);
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const startGame = () => {
  const getGameData = () => {
    const firstValue = randomInteger(1, 100);
    const secondValue = randomInteger(1, 100);
    const question = `${firstValue} ${secondValue}`;
    const correctAnswer = String(getGcd(firstValue, secondValue));
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
