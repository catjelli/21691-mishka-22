let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".nav-toggle");
let siteNav = document.querySelector(".site-nav");
const modalButton = document.querySelector(".week-product__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = modal.querySelector(".modal__button");

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

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  modalOverlay.classList.add("modal-overlay--show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  modalOverlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
      modalOverlay.classList.remove("modal-overlay--show");
    }
  }
});
