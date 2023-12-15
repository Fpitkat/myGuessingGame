# Guess The Number Game

This is a simple number guessing game implemented in JavaScript. The game generates a random number between 1 and 20, and the player's goal is to guess this number.

## How it works

The game uses the Document Object Model (DOM) to interact with the HTML elements of the webpage. It uses query selectors to select various elements such as the score, high score, message, number, and guess input fields, as well as the check and again buttons.

### Initialization

When the game starts, the `initializeGame` function is called. This function does the following:

- Generates a random number between 1 and 20 using the `generateRandomNumber` function and assigns it to the `secretNumber` variable.
- Sets the `score` to 20.
- Retrieves the high score from the high score DOM element and assigns it to the `highScore` variable.
- Updates the message, number, and player score DOM elements with initial values.
- Resets the guess input field and the background color.

### Random Number Generation

The `generateRandomNumber` function generates a random number between a given minimum and maximum value. It uses the `Math.random` function to generate a random decimal number between 0 and 1, multiplies it by the range (`max - min + 1`), truncates the decimal part using `Math.trunc`, and then adds the minimum value.

### DOM Updates

The `updateMessage`, `updateNumber`, and `updatePlayerScore` functions are used to update the text content of the message, number, and player score DOM elements respectively.

## How to Play

To play the game, enter a number between 1 and 20 in the guess input field and click the check button. If your guess is correct, you win the game. If your guess is incorrect, your score decreases by 1. If your score reaches 0, you lose the game. You can start a new game by clicking the again button.
