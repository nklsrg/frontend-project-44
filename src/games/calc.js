import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const descriptionGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length)];
};

const calculator = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return Error('Incorrect operator!');
  }
};

const conditionsRound = () => {
  const operator = getRandomOperator();
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(calculator(operator, operand1, operand2));
  return [question, answer];
};

export default () => startGameEngine(conditionsRound, descriptionGame);
