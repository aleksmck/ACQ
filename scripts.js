document.getElementById('start-game').addEventListener('click', function() {
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none';
        document.querySelector('.game-board').classList.remove('hidden');
        document.querySelector('.game-board').classList.add('fade-in');
    }, 600);
});

const gridItems = document.querySelectorAll('.grid-item');
let completedLines = 0;

// Array to keep track of clicked buttons
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
    // Check rows, columns, and diagonals
    for (let i = 0; i < 4; i++) {
        if (gridState[i].every(val => val === true) || // Row check
            gridState.every(row => row[i] === true)) { // Column check
            showPopup();
            return;
        }
    }
    if ((gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3]) || // Diagonal check 1
        (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0])) {  // Diagonal check 2
        showPopup();
    }
}

function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('close-popup').addHere's the remaining part of the JavaScript to handle closing the popup:

```javascript
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
