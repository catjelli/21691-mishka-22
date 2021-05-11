const modalButton = document.querySelector(".week-product__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  modalOverlay.classList.add("modal-overlay--show");
}
