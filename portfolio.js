/* MOBILE MENU */
document.querySelectorAll('.js_menu').forEach((element) => element.addEventListener('click', () => {
  document.querySelector('.navbar_mobile').classList.toggle('navbar_hidden');
}));
