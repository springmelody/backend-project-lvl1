import playGame from '../engine.js';

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const startGame = () => {
  const getGameData = () => {
    const question = randomInteger(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
