import startGame from '../index.js'
import getRandomNum from '../utils/get-random-num.js'

const mathematicalOperations = ['+', '-', '*']

function getCorrectAnswer(firstValue, secondValue, mathOperation) {
  switch (mathOperation) {
    case '+':
      return (firstValue + secondValue)
    case '-':
      return (firstValue - secondValue)
    case '*':
      return (firstValue * secondValue)
    default:
      throw new Error(`operation ${mathOperation} is not supported`)
  }
}

function generateGameData() {
  const firstValue = getRandomNum(0, 101)
  const secondValue = getRandomNum(0, 101)
  const mathOperation = mathematicalOperations[getRandomNum(0, mathematicalOperations.length - 1)]
  const question = `${firstValue} ${mathOperation} ${secondValue}`
  const correctAnswer = getCorrectAnswer(firstValue, secondValue, mathOperation)

  return [question, correctAnswer]
}

export default function getCalc() {
  startGame('What is the result of the expression?', generateGameData)
}
