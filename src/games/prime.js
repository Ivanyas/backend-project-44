import startGame from '../index.js'
import getRandomNum from '../utils/get-random-num.js'

function isPrime(number) {
  if (number <= 1) return false
  if (number === 2) return true

  const sqrtNum = Math.floor(Math.sqrt(number))
  for (let i = 2; i <= sqrtNum; i += 1) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

function generateGameData() {
  const question = getRandomNum(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default function getPrime() {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateGameData)
}
