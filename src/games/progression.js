import startGame from '../index.js';
import getRandomNum from '../utils/get-random-num.js';

function generateProgression(length, step, firstValue, hiddenValue) {
  const progressionArray = [];
  for (let count = 0; count < length; count += 1) {
    progressionArray.push(firstValue + (step * count));
  }
  progressionArray[hiddenValue] = '..';
  const progression = progressionArray.join(' ');

  return progression;
}

function generateGameData() {
  const length = getRandomNum(5, 10);
  const firstValue = getRandomNum(1, 101);
  const hiddenValue = getRandomNum(0, length - 1);
  const progressionStep = getRandomNum(1, 10);
  const question = generateProgression(
    length,
    progressionStep,
    firstValue,
    hiddenValue,
  );
  const correctAnswer = firstValue + (progressionStep * hiddenValue);

  return [question, correctAnswer];
}

export default function getProgression() {
  startGame('What number is missing in the progression?', generateGameData);
}