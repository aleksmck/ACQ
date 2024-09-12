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

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('crossed')) {
            item.classList.add('crossed');
            checkWinCondition();
        }
    });
});

function checkWinCondition() {
    completedLines++;
    if (completedLines >= 4) {
        document.getElementById('popup').classList.remove('hidden');
    }
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
