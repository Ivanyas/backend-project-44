import startGame from '../index.js';
import getRandomNum from '../utils/get-random-num.js';

function getCorrectAnswer(question) {
  const result = question % 2 === 0 ? 'yes' : 'no';

  return result;
}

function generateGameData() {
  const question = getRandomNum(0, 100);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
}

export default function getEven() {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', generateGameData);
}
