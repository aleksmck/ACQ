document.getElementById('start-game').addEventListener('click', function() {
    // Smooth transition to the game
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none'; // Hide the landing page
        document.querySelector('.game-board').classList.remove('hidden'); // Show the game board
        document.querySelector('.game-board').classList.add('fade-in');  // Apply fade-in effect
    }, 600);  // Delay for fade-out animation to complete
});

const gridItems = document.querySelectorAll('.grid-item');
let completedLines = 0;

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('crossed')) {
            item.classList.add('crossed');
            setTimeout(function() {
                checkWinCondition();
            }, 500);  // Slight delay for animation
        }
    });
});

function checkWinCondition() {
    // Check win conditions (rows, columns, diagonals)
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
    popup.classList.add('fade-in');
}

document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('prize-popup');
    popup.classList.add('fade-out');
    setTimeout(function() {
        popup.classList.add('hidden');
    }, 500);
});
