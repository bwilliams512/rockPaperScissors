/*
Rock paper scissors is a classic two player game.
Each player chooses either rock, paper, or scissors.
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
 -Rock destroys scissors.
 -Scissors cut paper.
 -Paper covers rock.
 -If there’s a tie, then the game ends in a draw.

This code will break the game into four parts:
 -Get the user’s choice.
 -Get the computer’s choice.
 -Compare the two choices and determine a winner.
 -Start the program and display the results.
*/

// Get user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()

  // Make sure user typed a valid choice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Invalid option. Try again.')
  }
}

// Uncomment code below to test the function by calling it with valid and invalid input and printing the results to the console
// console.log(getUserChoice('Paper'));
// console.log(getUserChoice('fork'));

// Have the computer make a choice
function getComputerChoice () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
};

// Uncomment code below to test the function by calling it multiple times and printing results to the console
// console.log(getComputerChoice());

// Now it is time to determine a winner
// This function will compare the two choices played and return if the human player won,lost, or tied
function determineWinner (userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'Very clever. You won!'
  } else if (userChoice === computerChoice) {
    return 'The game is a tie!'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors')
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

// Call the playGame function to start the game
playGame()
