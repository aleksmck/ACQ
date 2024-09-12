document.getElementById('start-game').addEventListener('click', function() {
    // Remove landing page properly by hiding it and removing from the flow
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
        document.querySelector('.game-board').classList.remove('hidden');
        document.querySelector('.game-board').classList.add('fade-in');  // Show game board
    }, 600);  // Timeout to let fade-out animation complete
});

// Load saved state from localStorage if available
let savedState = JSON.parse(localStorage.getItem('gridState')) || Array(4).fill(null).map(() => Array(4).fill(false));
let gridState = savedState;
let completedRows = Array(4).fill(false);
let completedCols = Array(4).fill(false);
let diagonal1Completed = false;
let diagonal2Completed = false;
let totalWins = 0; // Track how many winning combinations have been completed

const gridItems = document.querySelectorAll('.grid-item');

// Load previous selections
gridItems.forEach((item, index) => {
    let row = Math.floor(index / 4);
    let col = index % 4;
    if (gridState[row][col]) {
        item.classList.add('clicked');
    }
});

// Add click event to each grid item
gridItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('clicked')) {
            item.classList.add('clicked');
            let row = parseInt(item.getAttribute('data-row'));
            let col = parseInt(item.getAttribute('data-col'));
            gridState[row][col] = true;
            localStorage.setItem('gridState', JSON.stringify(gridState)); // Save state to localStorage
            checkWinCondition();
        }
    });
});

// Check win conditions
function checkWinCondition() {
    let winCount = 0;

    // Check rows
    for (let i = 0; i < 4; i++) {
        if (gridState[i].every(val => val === true) && !completedRows[i]) {
            completedRows[i] = true; // Mark the row as completed
            winCount++;
        }
    }

    // Check columns
    for (let i = 0; i < 4; i++) {
        if (gridState.every(row => row[i] === true) && !completedCols[i]) {
            completedCols[i] = true; // Mark the column as completed
            winCount++;
        }
    }

    // Check diagonals
    if (gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3] && !diagonal1Completed) {
        diagonal1Completed = true; // Mark diagonal 1 as completed
        winCount++;
    }
    if (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0] && !diagonal2Completed) {
        diagonal2Completed = true; // Mark diagonal 2 as completed
        winCount++;
    }

    // If any new win is detected and it hasn't already triggered the popup
    if (winCount > totalWins) {
        totalWins = winCount;
        showPopup();
    }
}

let winMessages = [
    "You won baby prize! Play more to find out what's the next prize",
    "Whoa Lady! You rock! Ask Aleks for Your present!",
    "Okey okey chill GIRL! Now Aleks will bankrupt",
    "You won special kiss... Ask Aleks!"
];
let currentWin = 0;

function showPopup() {
    if (currentWin < winMessages.length) {
        document.getElementById('popup-text').innerText = winMessages[currentWin];
        currentWin++;
        document.getElementById('popup').classList.remove('hidden');
    }
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

// Reset Button functionality
document.getElementById('reset-game').addEventListener('click', function() {
    localStorage.clear(); // Clear saved game
    location.reload(); // Reload the page
});
