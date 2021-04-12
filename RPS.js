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

const playerSelection = "rock".toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// Just finished making playerSelection case insensitive, now looking @ part 5 