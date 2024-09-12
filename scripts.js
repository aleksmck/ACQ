document.addEventListener('DOMContentLoaded', () => {
    const startQuestButton = document.getElementById('start-quest');
    
    startQuestButton.addEventListener('click', () => {
        window.location.href = 'game.html';
    });
});
