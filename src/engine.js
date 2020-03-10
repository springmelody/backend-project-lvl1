import readlineSync from 'readline-sync';

const roundCount = 3;

const playGame = (description, startGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = startGame();
    console.log(`Question: ${question} `);
    const playerAnswer = readlineSync.question('Your answer ');

    if (playerAnswer === correctAnswer) {
      console.log('\nCorrect!\n');
    } else {
      console.log(`\n ${playerAnswer} is wrong answer ;(.`);
      console.log(`Correct answer was ${correctAnswer}. Let's try again!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default playGame;
