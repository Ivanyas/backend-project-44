import startGame from '../index.js'
import getRandomNum from '../utils/get-random-num.js'

function gcd(val1, val2) {
  if (val2 === 0) {
    return val1
  }
  return gcd(val2, val1 % val2)
}

function generateGameData() {
  const firstValue = getRandomNum(0, 100)
  const secondValue = getRandomNum(0, 100)
  const question = `${firstValue} ${secondValue}`
  const correctAnswer = gcd(firstValue, secondValue)

  return [question, correctAnswer]
}

export default function getGcd() {
  startGame('Find the greatest common divisor of given numbers.', generateGameData)
}
