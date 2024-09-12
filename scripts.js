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
    for (let i = 0; i < 4; i++) {
        if (Here's the updated logic for checking and ensuring the winning condition, making the grid items stay clicked when selected, and improving the overall functionality:

### **Updated `scripts.js`**

```javascript
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
        showPopup();
        return;
    }
    if (gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0]) {
        showPopup();
    }
}

function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
