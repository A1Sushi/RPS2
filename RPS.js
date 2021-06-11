// Create a function that returns the string "rock", "paper", or "scissors" when called 
    // when computerPlay is called *
    // return either Rock, Paper, or Scissors from array *

function computerPlay() {
    let weapons = ["rock", "paper", "scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)];
}

// Create a fuction that will play a single round of RPS and declare a message for the winner:
    // (9 possibilites) *
    // Display winner and loser each call using if...else statements *
    // Return "invalid choice" if selection is not part of choice *
    // Make playerSelection parameter case-insensitive *
    // Display Scores in console (added console.log scores for every possibility)
    // Add a div for displaying results and change all of your console.logs into DOM methods.

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    const results = document.querySelector('#results');
    // Rock 
    if (playerSelection === "rock" && computerSelection === "rock") {
        // Target nodes and putting in variable to add textContent
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ ++playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ ++computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = 'Tie, No Points!';
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "Tie Game!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ ++computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = "You Lose! Paper beats Rock";
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ ++playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = "You Win! Rock beats Scissors";
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "You Win! Rock beats Scissors"; 
    // Paper 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ ++playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = "You Win! Paper beats Rock";
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = 'Tie, No Points!';
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "Tie!"; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
         // Player Score 
         const pScore = document.createElement('div');
         pScore.textContent = 'Player Score: '+ playerScore;
         // Computer Score 
         const cScore = document.createElement('div');
         cScore.textContent = 'Computer Score: '+ ++computerScore;
         // Final Result 
         const result = document.createElement('div');
         result.textContent = "You Lose! Scissor beats Paper";
         // Appending to DOM
         results.appendChild(pScore);
         results.appendChild(cScore);
         results.appendChild(result);
        return "You Lose! Scissor beats Paper"; 
    // Scissors
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ ++computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = "You Lose! Rock beats Scissors";
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ ++playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = "You Win! Scissors beats Paper";
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        // Player Score 
        const pScore = document.createElement('div');
        pScore.textContent = 'Player Score: '+ playerScore;
        // Computer Score 
        const cScore = document.createElement('div');
        cScore.textContent = 'Computer Score: '+ computerScore;
        // Final Result 
        const result = document.createElement('div');
        result.textContent = 'Tie, No Points!';
        // Appending to DOM
        results.appendChild(pScore);
        results.appendChild(cScore);
        results.appendChild(result);
        return "Tie!"; 
    } else {
        return "Invalid Choice!"
    } 
}

let playerSelection = "";

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

// Player Selection Choice - Event Listeners 
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("You Picked Rock!");
// });


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

// Creating Buttons for PlayerChoice 
const buttons = document.querySelectorAll('button');
// Use method to iterate through buttons and add 'click' 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    })
})

// Testing Single Round Game With Buttons 
// console.log(game())
//console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase();, computerPlay()));

/* Currently @
1. Add a div for displaying results and change all of your console.logs into DOM methods.
2. Working on the DOMS for rock vs rock 
3. Refractor code for playRound into smaller codes 
    - So, it looks like you have all that code repeated through all 9 if statements? If so, then yes that's not ideal. Save yourself some writing and make your function much more maintainable by eliminating the duplication. Don't be afraid to write extra functions.
    - You can definitely make things a lot easier on yourself by moving some of that conditional code into a function or multiple functions and simplifying your playRound function.
*/