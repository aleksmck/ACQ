document.getElementById('start-game').addEventListener('click', function() {
    // Smooth transition to the game board
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none'; // Hide the landing page
        document.querySelector('.game-board').classList.remove('hidden'); // Show the game board
        document.querySelector('.game-board').classList.add('fade-in');  // Apply fade-in effect
    }, 600);
});

const gridItems = document.querySelectorAll('.grid-item');
let gridState = Array(4).fill(null).map(() => Array(4).fill(false));

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('clicked')) {
            item.classList.add('clicked');
            let row = parseInt(item.getAttribute('data-row'));
            let col = parseInt(item.getAttribute('data-col'));
            gridState[row][col] = true;
            checkWinCondition();
        }
    });
});

function checkWinCondition() {
    // Check rows and columns
    for (let i = 0; i < 4; i++) {
        if (gridState[i].every(val => val === true)) {
            showPopup();  // Row check
            return;
        }
        if (gridState.every(row => row[i] === true)) {
            showPopup();  // Column check
            return;
        }
    }

    // Check diagonals
    if (gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3]) {
        showPopup();  // Diagonal 1
    }
    if (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0]) {
        showPopup();  // Diagonal 2
    }
}

function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
