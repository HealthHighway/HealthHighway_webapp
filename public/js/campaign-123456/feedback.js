// "use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider");
  var slide = 1;
/**
 * @brief Scroll to the right
 */
function scrollRight() {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
  });
  slide++;
}
// #CFCFCF

function scrollRestart() {
  slider.scrollTo({
    left: 0,
    behavior: "smooth"
  });
  slide = 1;
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  slider.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth"
  });
  slide--;
}

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
     scrollRight();
  }
});
