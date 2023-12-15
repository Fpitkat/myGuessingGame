'use strict'

// DOM elements
const hScore = document.querySelector('.highscore')
const playerScore = document.querySelector('.score')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')

// DOM buttons
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

// Variables
let secretNumber, score, highScore

// Initialize the game
initializeGame()

function initializeGame() {
  secretNumber = generateRandomNumber(1, 20)
  score = 20
  highScore = Number(hScore.textContent)
  updateMessage('Start guessing...')
  updateNumber('?')
  updatePlayerScore(score)
  updateBackgroundColor('#222')
  guessInput.value = ''
}

function generateRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min
}

function updateMessage(text) {
  message.textContent = text
}

function updateNumber(value) {
  number.textContent = value
}

function updatePlayerScore(value) {
  playerScore.textContent = value
}

function updateBackgroundColor(color) {
  document.body.style.backgroundColor = color
}

function handleGuess() {
  const guess = Number(guessInput.value)

  if (!guess) {
    updateMessage('⛔️ No number')
  } else if (guess < 1 || guess > 20) {
    updateMessage('Must be between 1 and 20')
  } else if (guess === secretNumber) {
    handleCorrectGuess()
  } else {
    handleIncorrectGuess(guess)
  }
}

function handleCorrectGuess() {
  updateMessage('🎂 Correct Number!')
  updateNumber(secretNumber)
  updateBackgroundColor('#60b347')
  number.style.width = '30rem'

  if (score > highScore) {
    highScore = score
    hScore.textContent = highScore
  }
}

function handleIncorrectGuess(guess) {
  if (score > 1) {
    updateMessage(guess > secretNumber ? '😭 Too High!!' : 'Too Low!!')
    score--
    updatePlayerScore(score)
  } else {
    updateMessage('Game Over')
    updatePlayerScore(0)
    updateBackgroundColor('red')
  }
}

// Event listeners
checkBtn.addEventListener('click', handleGuess)
againBtn.addEventListener('click', initializeGame)
