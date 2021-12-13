let menu_target = document.getElementById("js_open_menu");
menu_target.addEventListener("click", openMenu);

function openMenu() {
  let mobile_navbar = document.querySelector(".navbar-mobile");
  mobile_navbar.classList.remove("navbar_hidden");
}

let navbar_mobile_close = document.querySelector(".navbar-mobile-close");
navbar_mobile_close.addEventListener("click", closeMenu);
function closeMenu() {
  let mobile_navbar = document.querySelector(".navbar-mobile");
  mobile_navbar.classList.add("navbar_hidden");
}