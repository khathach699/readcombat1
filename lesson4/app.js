var image = document.querySelectorAll(".image img");
var prev = document.querySelector(".prew");
var right = document.querySelector(".right");
var close = document.querySelector(".close");
var galleryimg = document.querySelector(".gallery_inner img");
var gallery = document.querySelector(".gallery");

var currenindex = 0;

function showGallery() {
  if (currenindex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (currenindex == image.length - 1) {
    right.classList.add("hide");
  } else {
    right.classList.remove("hide");
  }
  galleryimg.src = image[currenindex].src;
  gallery.classList.add("show");
}

image.forEach((item, index) => {
  item.addEventListener("click", function () {
    currenindex = index;
    galleryimg.src = image[currenindex].src;
    gallery.classList.add("show");
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

prev.addEventListener("click", function () {
  if (currenindex > 0) {
    currenindex--;
    showGallery();
  }
});

right.addEventListener("click", function () {
  if (currenindex < image.length - 1) {
    currenindex++;
    showGallery();
  }
});
