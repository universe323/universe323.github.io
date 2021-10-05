const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');
    overlay = document.querySelector('.menu_overlay');
humburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__stat-counter'),
        lines = document.querySelectorAll('.skills__stat-load span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
