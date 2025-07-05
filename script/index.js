const burgerMenu = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('.nav-list li');

burgerMenu.addEventListener('click', () => {
    // Toggle Nav
    navList.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burgerMenu.classList.toggle('toggle');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('nav-active');
        burgerMenu.classList.remove('toggle');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});