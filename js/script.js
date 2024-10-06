document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.section-card');
    const dynamicBox = document.getElementById('dynamic-box');
    const dynamicText = document.getElementById('dynamic-text');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const text = card.getAttribute('data-text');
            dynamicText.textContent = text;
            dynamicBox.classList.remove('hidden');
        });
    });
});
