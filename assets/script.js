// Rock, Paper, Scissors
// Make a sign for rock, paper, or scissors --> need a variable to hold the choices
// Compare the signs
// Record the score --> variable(s) for that
// Win/loss conditions

// I want to play Rock, Paper, Scissors against an automated opponent.
// I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// I expect the computer to choose R, P, or S in return.
// I want the option to play again whether I win or lose.
// I want to see my total wins, ties, and losses after 10 rounds.

// Variable to hold the available choices
// Variable to hold wins
// Variable to hold losses
// Variable to hold ties
// Variable to hold whether the user wants to play again
// Variable to hold the user's choice
// Variable to hold the computer's choice
// Variable to keep track of how many rounds we've played?

// Need to randomly generate rock, paper, or scissors for the computer
  // Randomly generating 0, 1, or 2
  // Use that number as the index of our choices array to convert that to a choice (e.g., choices[1])

// Prompt the user for their choice
  // Input validation: did the user choose an available choice?
  // Enforce casing --> .toUpperCase() or .toLowerCase()

// Alert the computer's choice

// Compare the user's choice and the computer's choice
  // Rock smashes scissors
  // Scissors cuts paper
  // Paper covers rock

// If the user wins, increment wins
// If the user loses, increment losses
// If it's a tie, increment the ties

// Alert whether it's a win, loss, or tie
// Alert current win-loss-tie stats?
// Either increment or decrement the 'rounds' variable
// Either confirm whether to start a new round OR start a new round

// After 10 rounds, alert the stats

let choices = ['R', 'P', 'S'] 
let matches = 0;
let wins = 0; 
let losses = 0;
let draw = 0;