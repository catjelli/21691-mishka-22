const modalButton = document.querySelector(".week-product__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = modal.querySelector(".modal__button");

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
