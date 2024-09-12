document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const resetButton = document.getElementById('reset-game');
    const closePopupButton = document.getElementById('close-popup');
    const prizePopup = document.getElementById('prize-popup');
    const prizeMessage = document.getElementById('prize-message');
    const gridItems = document.querySelectorAll('.grid-item');
    const gameBoard = document.getElementById('game-board');
    const landingPage = document.getElementById('landing-page');

    // Initialize grid state
    let gridState = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ];

    // Track wins
    let prizeCount = 0;
    const prizeMessages = [
        "You won baby prize! Play more to find out what's the next prize.",
        "Whoa Lady! You rock! Ask Aleks for Your present!",
        "Okey okey chill GIRL! Now Aleks will bankrupt.",
        "You won a special kiss... Ask Aleks!"
    ];

    // Function to check for win conditions
    function checkWin() {
        for (let i = 0; i < 4; i++) {
            // Check rows and columns
            if (gridState[i].every(val => val) || gridState.map(row => row[i]).every(val => val)) {
                showPrize();
                return;
            }
        }
        // Check diagonals
        if (gridState[0][0] && gridState[1][1] && gridState[2][2] && gridState[3][3] ||
            gridState[0][3] && gridState[1][2] && gridState[2][1] && gridState[3][0]) {
            showPrize();
        }
    }

    // Function to show prize popup
    function showPrize() {
        if (prizeCount < 4) {
            prizeMessage.textContent = prizeMessages[prizeCount];
            prizePopup.classList.remove('hidden');
            prizeCount++;
        }
    }

    // Handle grid item click
    gridItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const row = e.target.dataset.row;
            const col = e.target.dataset.col;
            if (!gridState[row][col]) {
                gridState[row][col] = true;
                e.target.classList.add('selected');
                checkWin();
            }
        });
    });

    // Reset Game
    resetButton.addEventListener('click', () => {
        gridState = [
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false]
        ];
        gridItems.forEach(item => item.classList.remove('selected'));
        prizeCount = 0;
    });

    // Handle start game
    startButton.addEventListener('click', () => {
        landingPage.classList.add('hidden');
        gameBoard.classList.remove('hidden');
    });

    // Close popup
    closePopupButton.addEventListener('click', () => {
        prizePopup.classList.add('hidden');
    });
});
