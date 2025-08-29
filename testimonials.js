const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-controls .prev');
const nextBtn = document.querySelector('.testimonial-controls .next');

let currentIndex = 0;

// Show only the current card
function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) card.classList.add('active');
    });
}

// Next card
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= cards.length) currentIndex = 0;
    showCard(currentIndex);
});

// Previous card
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = cards.length - 1;
    showCard(currentIndex);
});

// Initialize first card
showCard(currentIndex);
    