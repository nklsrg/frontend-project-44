import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

const progressionLength = 10;

const createProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const conditionsRound = () => {
  const diff = getRandomNumber(1, 100);
  const start = getRandomNumber(1, 100);
  const indexHiddenNumber = getRandomNumber(0, progressionLength - 1);
  const progression = createProgression(start, diff, progressionLength);
  const answer = String(progression[indexHiddenNumber]);
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGameEngine(conditionsRound, descriptionGame);
