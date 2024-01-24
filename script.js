//burger

function toggleMenu() {
    let menu = document.querySelector('.menu');
    let menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('transform');
    menu.classList.toggle('active');
    console.log('Menu toggled');
};
