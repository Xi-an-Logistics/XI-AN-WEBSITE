// Simple swiper functionality for news cards
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('news-cards');
    const cards = Array.from(cardsContainer.children);
    const leftBtn = document.getElementById('news-left');
    const rightBtn = document.getElementById('news-right');
    const viewAllBtn = document.querySelector('.news-header .view-all');
    let start = 0;
    let visible = 4;
    let isViewAll = false;

    function updateCards() {
        if (isViewAll) {
            cardsContainer.classList.add('news-grid'); // Add grid style
            cards.forEach(card => card.style.display = 'flex');
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        } else {
            cardsContainer.classList.remove('news-grid'); // Remove grid style
            cards.forEach((card, i) => {
                card.style.display = (i >= start && i < start + visible) ? 'flex' : 'none';
            });
            leftBtn.style.display = '';
            rightBtn.style.display = '';
        }
    }

    function checkResponsive() {
        if (window.innerWidth <= 500) {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
            viewAllBtn.style.display = 'none';
            cards.forEach(card => card.style.display = 'flex');
        } else {
            viewAllBtn.style.display = '';
            if (window.innerWidth <= 900) visible = 2;
            else visible = 4;
            if (start + visible > cards.length) start = Math.max(0, cards.length - visible);
            updateCards();
        }
    }

    leftBtn.addEventListener('click', function () {
        if (!isViewAll && start > 0) {
            start--;
            updateCards();
        }
    });

    rightBtn.addEventListener('click', function () {
        if (!isViewAll && start + visible < cards.length) {
            start++;
            updateCards();
        }
    });

    window.addEventListener('resize', function () {
        if (!isViewAll) checkResponsive();
    });

    viewAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        isViewAll = !isViewAll; // Toggle grid/ordinary view
        updateCards();
        // Optionally change button text
        viewAllBtn.textContent = isViewAll ? "Show less" : "View all";
    });

    checkResponsive(); // Initial check
});