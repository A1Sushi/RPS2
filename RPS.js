// Create a function that returns the string "rock", "paper", or "scissors" when called 
    // when computerPlay is called *
    // return either Rock, Paper, or Scissors from array *
    // Most likely don't need the randomWeapon =

function computerPlay() {
    let weapons = ["rock", "paper", "scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)];
}

// Create a fuction that will play a single round of RPS and declare a message for the winner 

// when playRound is called (9 possibilites)
    // if playerSelection = rock & computerSelection = paper, display winner
    // if else repeat for each possibility
    // else invalid choice 
    // Make playerSelection parameter case-insensitive 
    // Display Scores (added console.log scores for every possibility)

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    
    // Rock 
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log(playerScore)
        console.log(computerScore)
        return "Tie!"; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(playerScore)
        console.log(++computerScore)
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(++playerScore)
        console.log(computerScore)
        return "You Win! Rock beats Scissors"; 
    // Paper 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(++playerScore)
        console.log(computerScore)
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log(playerScore)
        console.log(computerScore)
        return "Tie!"; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(playerScore)
        console.log(++computerScore)
        return "You Lose! Scissor beats Paper"; 
    // Scissors
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(playerScore)
        console.log(++computerScore)
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(++playerScore)
        console.log(computerScore)
        return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(playerScore)
        console.log(computerScore)
        return "Tie!"; 
    } else {
        return "Invalid Choice!"
    } 
}

/* Test Results of Function Call 
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
*/

// Create function that plays a game 5x using the playRound function inside & keeps score each round declaring the winner at the end. 
    // No interface played in the console
    // Interaction = user picking a weapon (use prompt) 
    // Desire output = Declare winner of the game after 5 rounds

// when game() is called; 
    // Play a round of RPS (use computerPlay because we want a random selection from computer each time the function is called)
    // if player wins increment playerScore by 1 
        // 1. Create 2 variable to store scores
        // 2. Use increment operator to add score (might have to do this in playRound) 
    // else (computer wins) increment computerScore by 1 
    // Make sure scores are saved after each round 
    // After 5 rounds return message declaring winner based on highest score!  

// Variables to Hold Scores
let playerScore = 0
let computerScore = 0

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay());
    }

    if (playerScore > computerScore) {
        return "Player Wins Game!!!";
    } else if (playerScore < computerScore) {
        return "Computer Wins Game :(";
    } else {
        return "Tie Game!";
    }
}
console.log(game())

// 5 Round game w/o Loop
    // Round 1 
    //console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));
    // Round 2
    //console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));
    // Round 3
    //console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));
    // Round 4
    //console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));
    // Round 5
    //console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));

// Currently on
    // 1. 

// Questions
    // 1. 