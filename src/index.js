import readlineSync from 'readline-sync';

const gameRoundsAmount = 3;

const startGameEngine = (conditionsRound, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionGame);
  for (let i = 0; i < gameRoundsAmount; i += 1) {
    const [question, answer] = conditionsRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameEngine;
