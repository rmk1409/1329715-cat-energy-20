let toggleButton = document.querySelector('.menu-toggle-button');
let menu = document.querySelector('.main-header-nav__menu');

toggleButton.classList.toggle('visually-hidden');
menu.classList.toggle('main-header-nav__menu--closed');

toggleButton.addEventListener('click', event => {
  toggleButton.classList.toggle('menu-toggle-button--opened');
  menu.classList.toggle('main-header-nav__menu--closed');
});
