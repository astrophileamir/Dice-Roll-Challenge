const rollButton = document.getElementById('rollButton');
const playerDice = document.getElementById('playerDice');
const computerDice = document.getElementById('computerDice');
const resultDisplay = document.getElementById('result');

const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; // Representing dice faces

// Function to roll a single die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the dice for both player and computer
function rollDice() {
    const playerRoll = rollDie();
    const computerRoll = rollDie();

    playerDice.textContent = diceEmojis[playerRoll - 1];
    computerDice.textContent = diceEmojis[computerRoll - 1];

    displayResult(playerRoll, computerRoll);
}

// Function to display the result of the game
function displayResult(playerRoll, computerRoll) {
    if (playerRoll > computerRoll) {
        resultDisplay.textContent = "You Win!";
        resultDisplay.style.color = "green";
    } else if (playerRoll < computerRoll) {
        resultDisplay.textContent = "Computer Wins!";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = "It's a Tie!";
        resultDisplay.style.color = "orange";
    }
}

// Event listener for the roll button
rollButton.addEventListener('click', rollDice);
