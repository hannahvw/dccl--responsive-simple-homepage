const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-button");
const navMenu = document.querySelector(".nav-menu");
const darkModeBtn = document.querySelector(".dark-mode-toggle");
const lightModeBtn = document.querySelector(".light-mode-toggle");
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

function toggleDarkMode() {
  toggleState = !toggleState;
  if (toggleState == true) {
    document.body.classList.add("darkmode");
    darkModeBtn.style.display = "none";
    lightModeBtn.style.display = "flex";
  } else {
    document.body.classList.remove("darkmode");
    darkModeBtn.style.display = "flex";
    lightModeBtn.style.display = "none";
  }
}

darkModeBtn.addEventListener("click", toggleDarkMode);
lightModeBtn.addEventListener("click", toggleDarkMode);
