// Create a function that returns the string "rock", "paper", or "scissors" when called 

// when computerPlay is called 
// return either Rock, Paper, or Scissors from array 

function computerPlay() {
    let weapons = ["rock", "paper", "scissors"]
    return randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
}

// Create a fuction that will play a single round of RPS and declare a message for the winner 

// when playRound is called (9 possibilites)
// if playerSelection = rock & computerSelection = paper, display winner 
// if else repeat for each possibility
// else invalid choice 
// Make playerSelection case-insensitive 

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    // Rock 
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie!"; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"; 
    // Paper 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie!"; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissor beats Paper"; 
    // Scissors
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie!"; 
    } else {
        return "Invalid Choice!"
    }
}

let playerSelection = "rock".toLowerCase();
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

// Create function that plays a game 5x using the playRound function inside & keeps score each round declaring the winner at the end. 
// No interface played in the console
// Interaction = user picking a weapon (use prompt)
// Desire output = Declare winner of the game 

// when game() is called; 
// Play a round of RPS using previous function inside (use computerPlay because we want a random selection from computer each time the function is called)
// if player wins increment playerScore by 1*
// else (computer wins) increment computerScore by 1*
// When playerScore or computerScore === 5, return message declaring winner!* 

function game() {
    return playRound(playerSelection, computerPlay());
}
console.log(game());

// Working on part 6 - Figure out how to keep score each round

// Question for TOP Discord
// - 
// et playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();