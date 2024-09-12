document.getElementById('start-game').addEventListener('click', function() {
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none';
        document.querySelector('.game-board').classList.remove('hidden');
        document.querySelector('.game-board').classList.add('fade-in');
    }, 600);
});

const gridItems = document.querySelectorAll('.grid-item');
let gridState = Array(4).fill(null).map(() => Array(4).fill(false));
let completedRows = Array(4).fill(false); // To track completed rows
let completedCols = Array(4).fill(false); // To track completed columns
let diagonal1Completed = false;
let diagonal2Completed = false;

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
    // Check rows
    for (let i = 0; i < 4; i++) {
        if (gridState[i].every(val => val === true) && !completedRows[i]) {
            completedRows[i] = true; // Mark the row as completed
            showPopup();
            return;
        }
    }

    // Check columns
    for (let i = 0; i < 4; i++) {
        if (gridState.every(row => row[i] === true) && !completedCols[i]) {
            completedCols[i] = true; // Mark the column as completed
            showPopup();
            return;
        }
    }

    // Check diagonal 1 (top-left to bottom-right)
    if (gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3] && !diagonal1Completed) {
        diagonal1Completed = true; // Mark diagonal 1 as completed
        showPopup();
        return;
    }

    // Check diagonal 2 (top-right to bottom-left)
    if (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0] && !diagonal2Completed) {
        diagonal2Completed = true; // Mark diagonal 2 as completed
        showPopup();
    }
}

function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
