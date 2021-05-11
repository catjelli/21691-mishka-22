let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
const modalButton = document.querySelector(".week-product__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  modalOverlay.classList.add("modal-overlay--show");
})
