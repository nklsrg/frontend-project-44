import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const conditionsRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGameEngine(conditionsRound, descriptionGame);
