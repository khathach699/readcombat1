var btnOpen = document.querySelector(".open-mode-btn");
var model = document.querySelector(".model");
var iconClose = document.querySelector(".model_header i");
var btnClose = document.querySelector(".model_footer button");

function toggleModal() {
  model.classList.toggle("hide");
}
btnOpen.addEventListener("click", toggleModal);
model.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal;
  }
});

btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
