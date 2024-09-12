document.getElementById('start-game').addEventListener('click', function() {
    // Smooth transition to the game board
    document.querySelector('.landing-page').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
        document.querySelector('.game-board').classList.remove('hidden'); // Show the game board
        document.querySelector('.game-board').classList.add('fade-in');  // Fade-in effect
    }, 600);  // Delay for fade-out animation to complete
});
