const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-button");
const navMenu = document.querySelector(".nav-menu");
let toggleState = false;

function toggleMenu() {
  toggleState = !toggleState;
  if (toggleState == true) {
    navMenu.style.display = "block";
  } else {
    menuBtn.style.display = "block";
    navMenu.style.display = "none";
  }
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
