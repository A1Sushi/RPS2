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
        ++computerScore
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore
        return "You Win! Rock beats Scissors"; 
    // Paper 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie!"; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore
        return "You Lose! Scissor beats Paper"; 
    // Scissors
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore
        return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie!"; 
    } else {
        return "Invalid Choice!"
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

// Create function that plays a game 5x using the playRound function inside & keeps score each round declaring the winner at the end. 
// No interface played in the console
// Interaction = user picking a weapon (use prompt) 
// Desire output = Declare winner of the game 

// when game() is called; 
// Play a round of RPS (use computerPlay because we want a random selection from computer each time the function is called)
// if player wins increment playerScore by 1 
    // 1. Create 2 variable to store scores
    // 2. Use increment operator to add score (might have to do this in playRound) 
// else (computer wins) increment computerScore by 1
// Make sure scores are saved after each round 
// When playerScore or computerScore === 5, return message declaring winner!  

function game() {
    return playRound(playerSelection, computerPlay());
}

let playerScore = 0
let computerScore = 0

// Round 1
console.log(game());
console.log (playerScore)
console.log (computerScore)
// Round 2
console.log(game());
console.log (playerScore)
console.log (computerScore)
// Round 3
console.log(game());
console.log (playerScore)
console.log (computerScore)
// Round 4
console.log(game());
console.log (playerScore)
console.log (computerScore)
// Round 5
console.log(game());
console.log (playerScore)
console.log (computerScore)

// Result of 5 games played 
if (playerScore > computerScore) {
    alert ("You Won!!!");
} else if (playerScore < computerScore) {
    alert ("Computer Wins Game :(");
} else {
    alert ("Tie Game!");
}

// Currently on
    // 1. Code works, now try and make the results work from calling game(); 
    // Currently works in global scope using console.log 

// Question for TOP Discord
    // 1. For part 6, I was wondering if there should be a prompt() for the player to select their choice every round up until round 5 even if I'm not using a loop function?
    // 2. What does part 4 mean by changing return value to something useful
    // https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
   
    // 3. For Step 6 (part 1), since I haven't learned how to loop yet, would calling my``playRound()`` function 5 times have to show the  final score or is that only  once i learn loops?
        // = Display results each round and winner @ the end 