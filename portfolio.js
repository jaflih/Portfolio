/* MOBILE MENU */
function toggleMobileMenu() {
  document.querySelector(".navbar_mobile").classList.toggle("navbar_hidden");
}

document
  .querySelectorAll("#js_open_menu, .js_close_menu, .nav_link_mobile")
  .forEach((element) => element.addEventListener("click", toggleMobileMenu));
