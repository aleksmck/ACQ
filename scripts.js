document.getElementById('start-game').addEventListener('click', function() {
    document.querySelector('.landing-page').classList.add('hidden');
    document.querySelector('.game-board').classList.remove('hidden');
});

const gridItems = document.querySelectorAll('.grid-item');
let completedLines = 0;

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('crossed')) {
            item.classList.add('crossed');
            checkWinCondition();
        }
    });
});

function checkWinCondition() {
    // Check for win conditions (rows, columns, diagonals)
    // Simplified: You can implement actual logic for your grid
    completedLines++;
    if (completedLines === 1) {
        showPopup("You won tier one prize! Ask Alex about it");
    } else if (completedLines === 2) {
        showPopup("You won tier two prize! Ask Alex about it");
    } else if (completedLines === 3) {
        showPopup("You won tier three prize! Ask Alex about it");
    }
}

function showPopup(message) {
    const popup = document.getElementById('prize-popup');
    document.getElementById('prize-text').textContent = message;
    popup.classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('prize-popup').classList.add('hidden');
});

