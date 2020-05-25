import playGame from '../engine.js';
import randomInteger from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const generateArithmeticProgression = (startValue, difference, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(startValue + (difference * i));
  }

  return result;
};

const startGame = () => {
  const getGameData = () => {
    const firstValue = randomInteger(1, 100);
    const difference = randomInteger(1, 5);
    const progression = generateArithmeticProgression(firstValue, difference, lengthProgression);
    const hiddenItem = progression[randomInteger(0, progression.length - 1)];
    const hiddenItemIndex = progression.indexOf(hiddenItem);
    const correctAnswer = String(progression[hiddenItemIndex]);
    progression[hiddenItemIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
