// Get the button
const backToTopButton = document.getElementById("backToTopBtn");
const overlay = document.getElementById("overlay");
const showOverlayBtn = document.getElementById("showOverlayBtn");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

// Show the button after scrolling down 20px
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// When the user clicks the button, scroll to the top
backToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


showOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});

closeOverlayBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});

// Toggle Navigation Menu for Mobile
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
