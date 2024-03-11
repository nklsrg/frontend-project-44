import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGreatestCommonDivisor(number2, number1 % number2);
};

const conditionsRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGreatestCommonDivisor(number1, number2));
  return [question, answer];
};

export default () => startGameEngine(conditionsRound, descriptionGame);
