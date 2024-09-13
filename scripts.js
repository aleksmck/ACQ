// Switch from landing page to game
document.getElementById('start-game').addEventListener('click', function () {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.game-board').classList.remove('hidden');
});

// Placeholder for game logic and popup handling
let gridItems = document.querySelectorAll('.grid-item');
let gridState = Array(4).fill(null).map(() => Array(4).fill(false));
let prizesWon = 0;

const winMessages = [
    "You won baby prize! Play more to find out what's the next prize",
    "Whoa Lady! You rock! Ask Aleks for Your present!",
    "Okey okey chill GIRL! Now Aleks will bankrupt",
    "You won special kiss... Ask Aleks!"
];

const catSounds = [
    new Audio('cat1.wav'),
    new Audio('cat2.wav'),
    new Audio('cat3.wav'),
    new Audio('cat4.wav'),
    new Audio('cat5.wav')
];

function playRandomCatSound() {
    const randomIndex = Math.floor(Math.random() * catSounds.length);
    catSounds[randomIndex].play();
}

gridItems.forEach(item => {
    item.addEventListener('click', function () {
        if (!item.classList.contains('clicked')) {
            item.classList.add('clicked');
            item.style.backgroundColor = "#4CAF50"; // Change color on click
            let row = parseInt(item.getAttribute('data-row'));
            let col = parseInt(item.getAttribute('data-col'));
            gridState[row][col] = true;
            playRandomCatSound(); // Play random cat sound on click
            checkForWin();
        }
    });
});

function checkForWin() {
    if (prizesWon < 4) {
        if (checkRows() || checkCols() || checkDiagonals()) {
            showPopup(prizesWon);
            prizesWon++;
        }
    }
}

function checkRows() {
    for (let i = 0; i < 4; i++) {
        if (gridState[i].every(val => val === true)) {
            return true;
        }
    }
    return false;
}

function checkCols() {
    for (let col = 0; col < 4; col++) {
        if (gridState.every(row => row[col] === true)) {
            return true;
        }
    }
    return false;
}

function checkDiagonals() {
    if (gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3]) {
        return true; // First diagonal
    }
    if (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0]) {
        return true; // Second diagonal
    }
    return false;
}

function showPopup(winIndex) {
    document.getElementById('popup-text').innerText = winMessages[winIndex];
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
});

// Reset Button functionality
document.getElementById('reset-game').addEventListener('click', function () {
    gridItems.forEach(item => {
        item.classList.remove('clicked');
        item.style.backgroundColor = "";
    });
    gridState = Array(4).fill(null).map(() => Array(4).fill(false));
    prizesWon = 0;
    document.getElementById('popup').classList.add('hidden');
});
