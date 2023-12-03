var btnsearch = document.querySelector(".search_box_button");

btnsearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.parentElement.querySelector(".search_box_input").focus();
});
