const navButton = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');

navButton.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile__nav--active');
    navButton.classList.toggle('nav__button--close');
});



