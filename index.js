const hamburger = document.querySelector('.nav__mobile');
const navItemsContainer = document.querySelector('.nav__items');
hamburger.addEventListener('click', e => {
    e.preventDefault();
    hamburger.classList.toggle('open');
    navItemsContainer.classList.toggle('open');
})