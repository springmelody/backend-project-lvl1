import playGame from '../engine.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('This operator is missing');
  }
};

const startGame = () => {
  const getGameData = () => {
    const firstOperand = randomInteger(1, 20);
    const secondOperand = randomInteger(1, 20);
    const operator = operators[randomInteger(0, operators.length - 1)];
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = String(getAnswer(firstOperand, secondOperand, operator));
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default startGame;
