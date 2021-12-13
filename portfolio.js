/* MOBILE MENU */
function openMobileMenu() {
  document.querySelector('.navbar_mobile').classList.remove('navbar_hidden');
}

function closeMobileMenu() {
  document.querySelector('.navbar_mobile').classList.add('navbar_hidden');
}

document
  .getElementById('js_open_menu')
  .addEventListener('click', openMobileMenu);
document
  .querySelector('.js_close_menu')
  .addEventListener('click', closeMobileMenu);
document
  .querySelectorAll('.nav_link_mobile')
  .forEach((element) => element.addEventListener('click', closeMobileMenu));
