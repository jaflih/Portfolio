let menu_target = document.getElementById("js_open_menu");
menu_target.addEventListener("click", openMenu);

function openMenu() {
  let mobile_navbar = document.querySelector(".navbar-mobile");
  mobile_navbar.classList.remove("navbar_hidden");
}
