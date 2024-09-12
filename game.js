document.addEventListener('DOMContentLoaded', () => {
    const attractions = document.querySelectorAll('.attraction');
    
    attractions.forEach(attraction => {
        attraction.addEventListener('click', () => {
            const link = attraction.getAttribute('data-link');
            if (confirm(`Do you want to visit ${attraction.textContent}?`)) {
                window.open(link, '_blank');
                attraction.classList.add('visited');
                checkForWin();
            }
        });
    });

    function checkForWin() {
        const categories = document.querySelectorAll('.category');
        let win = false;

        // Check rows
        categories.forEach(category => {
            if (Array.from(category.querySelectorAll('.attraction')).every(a => a.classList.contains('visited'))) {
                win = true;
            }
        });

        // Check columns
        for (let i = 0; i < 4; i++) {
            if (Array.from(categories).every(category => category.querySelectorAll('.attraction')[i].classList.contains('visited'))) {
                win = true;
            }
        }

        // Check diagonals
        if (
            (categories[0].querySelectorAll('.attraction')[0].classList.contains('visited') &&
            categories[1].querySelectorAll('.attraction')[1].classList.contains('visited') &&
            categories[2].querySelectorAll('.attraction')[2].classList.contains('visited') &&
            categories[3].querySelectorAll('.attraction')[3].classList.contains('visited')) ||
            (categories[0].querySelectorAll('.attraction')[3].classList.contains('visited') &&
            categories[1].querySelectorAll('.attraction')[2].classList.contains('visited') &&
            categories[2].querySelectorAll('.attraction')[1].classList.contains('visited') &&
            categories[3].querySelectorAll('.attraction')[0].classList.contains('visited'))
        ) {
            win = true;
        }

        if (win) {
            alert('Congratulations! You won a prize!');
        }
    }
});
