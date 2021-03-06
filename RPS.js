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
    // Add a div for displaying results and change all of your console.logs into DOM methods. *

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

// Create function that plays a game 5x using the playRound function inside & keeps score each round declaring the winner at the end. 
    // Interface required to play through buttons
    // Interaction = user presses button to choose weapon
    // Desire output = Alert winner after someone reaches 5 points 

// Variables to Hold Scores
let playerScore = 0
let computerScore = 0

// Creating Buttons for PlayerChoice 
const buttons = document.querySelectorAll('button');
// Use method to iterate through buttons and add 'click' 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Alert winner once someone reaches a score of 5
        playRound(button.id, computerPlay());
        if (playerScore === 5) {
            alert("Player Wins Game!!!");
        } else if (computerScore === 5) {
            alert("Computer Wins Game :(");
        }
    })
})

/* To Improve 
1. Refractor code for playRound into smaller codes 
    - So, it looks like you have all that code repeated through all 9 if statements? If so, then yes that's not ideal. Save yourself some writing and make your function much more maintainable by eliminating the duplication. Don't be afraid to write extra functions.
    - You can definitely make things a lot easier on yourself by moving some of that conditional code into a function or multiple functions and simplifying your playRound function.
*/