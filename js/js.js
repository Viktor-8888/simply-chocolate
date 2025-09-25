const modal = document.querySelector('.js-modal');
const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const menu = document.querySelector('.js-menu');
const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const menuLinkHome = document.querySelector('.js-link-menu-home');
const menuLinkMade = document.querySelector('.js-link-menu-made');
const menuLinkReviews = document.querySelector('.js-link-menu-reviews');
// const headerMenuList = document.querySelector('.header-menu-list');
const headerMenuLinks = document.querySelectorAll('.header-menu-link');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
function toggleModal() {
  modal.classList.toggle('is-open');
}
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuLinkHome.addEventListener('click', toggleMenu);
menuLinkMade.addEventListener('click', toggleMenu);
menuLinkReviews.addEventListener('click', toggleMenu);
function toggleMenu() {
  menu.classList.toggle('is-open');
}
headerMenuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    headerMenuLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
