import playGame from '../engine.js';
import randomInteger from '../utils.js';

const description = 'Answer \'yes\' if number even otherwise answer \'no\'';
const isEven = (number) => number % 2 === 0;

const startGame = () => {
  const getGameData = () => {
    const question = randomInteger(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
