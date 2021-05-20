let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".nav-toggle");
let siteNav = document.querySelector(".site-nav");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("nav-toggle--nojs");
siteNav.classList.add("site-nav--js");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("nav-toggle--opened");
    navToggle.classList.remove("nav-toggle--closed");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navToggle.classList.add("nav-toggle--closed");
    navToggle.classList.remove("nav-toggle--opened");
  }
});
