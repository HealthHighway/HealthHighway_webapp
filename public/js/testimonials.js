const arrowNextButton = document.querySelector(".swiper-button-next");
const arrowPrevButton = document.querySelector(".swiper-button-prev");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperSlides = document.querySelectorAll(".swiper-slide");
const wrapperLength = swiperSlides.length;
const testimonialImages = document.querySelectorAll(".img-container img");
let sliderWidth;
var intervalID;
let swiperWidth = 700;
let currentSlide = 0;

//forward animation of images
const startForwardAnimate = () => {
  const frSlide = currentSlide;
  if (frSlide === 0) {
    testimonialImages[0].classList.remove("img-2");
    testimonialImages[0].classList.add("img-1");
    testimonialImages[1].classList.remove("img-3");
    testimonialImages[1].classList.add("img-2");
    testimonialImages[2].classList.remove("img-4");
    testimonialImages[2].classList.add("img-3");
    testimonialImages[3].classList.remove("img-5");
    testimonialImages[3].classList.add("img-4");
    testimonialImages[4].classList.remove("img-1");
    testimonialImages[4].classList.add("img-5");
  }
  if (frSlide === 1) {
    testimonialImages[frSlide - 1].classList.remove("img-1");
    testimonialImages[frSlide - 1].classList.add("img-2");
    testimonialImages[frSlide].classList.remove("img-2");
    testimonialImages[frSlide].classList.add("img-1");
  }
  if (frSlide === 2) {
    testimonialImages[frSlide - 1].classList.remove("img-1");
    testimonialImages[frSlide - 1].classList.add("img-3");
    testimonialImages[frSlide].classList.remove("img-3");
    testimonialImages[frSlide].classList.add("img-1");
  }
  if (frSlide === 3) {
    testimonialImages[frSlide - 1].classList.remove("img-1");
    testimonialImages[frSlide - 1].classList.add("img-4");
    testimonialImages[frSlide].classList.remove("img-4");
    testimonialImages[frSlide].classList.add("img-1");
  }
  if (frSlide === 4) {
    testimonialImages[frSlide - 1].classList.remove("img-1");
    testimonialImages[frSlide - 1].classList.add("img-5");
    testimonialImages[frSlide].classList.remove("img-5");
    testimonialImages[frSlide].classList.add("img-1");
  }
};

// backward animation of images
const startBackwardAnimate = () => {
  const bwSlide = currentSlide + 1;
  if (bwSlide === 1) {
    testimonialImages[bwSlide - 1].classList.remove("img-2");
    testimonialImages[bwSlide - 1].classList.add("img-1");
    testimonialImages[bwSlide].classList.remove("img-1");
    testimonialImages[bwSlide].classList.add("img-2");
  }
  if (bwSlide === 2) {
    testimonialImages[bwSlide - 1].classList.remove("img-3");
    testimonialImages[bwSlide - 1].classList.add("img-1");
    testimonialImages[bwSlide].classList.remove("img-1");
    testimonialImages[bwSlide].classList.add("img-3");
  }
  if (bwSlide === 3) {
    testimonialImages[bwSlide - 1].classList.remove("img-4");
    testimonialImages[bwSlide - 1].classList.add("img-1");
    testimonialImages[bwSlide].classList.remove("img-1");
    testimonialImages[bwSlide].classList.add("img-4");
  }
  if (bwSlide === 4) {
    testimonialImages[bwSlide - 1].classList.remove("img-5");
    testimonialImages[bwSlide - 1].classList.add("img-1");
    testimonialImages[bwSlide].classList.remove("img-1");
    testimonialImages[bwSlide].classList.add("img-5");
  }
  if (bwSlide === 5) {
    testimonialImages[0].classList.remove("img-1");
    testimonialImages[0].classList.add("img-2");
    testimonialImages[1].classList.remove("img-2");
    testimonialImages[1].classList.add("img-3");
    testimonialImages[2].classList.remove("img-3");
    testimonialImages[2].classList.add("img-4");
    testimonialImages[3].classList.remove("img-4");
    testimonialImages[3].classList.add("img-5");
    testimonialImages[4].classList.remove("img-5");
    testimonialImages[4].classList.add("img-1");
  }
};

const slideForward = () => {
  swiperWrapper.style.transform = `translateX(${
    -swiperWidth * currentSlide
  }px)`;

  //add swiper slide active to the current slide and remove active from the prev slide
  if (currentSlide === 0) {
    swiperSlides[4].classList.remove("swiper-slide-active");
  } else swiperSlides[currentSlide - 1].classList.remove("swiper-slide-active");
  swiperSlides[currentSlide].classList.add("swiper-slide-active");
  startForwardAnimate();
};

const slideBackward = () => {
  startBackwardAnimate();
  swiperWrapper.style.transform = `translateX(${
    -swiperWidth * currentSlide
  }px)`;

  //add swiper slide active to the current slide and remove active from the next slide
  if (currentSlide === 4) {
    swiperSlides[0].classList.remove("swiper-slide-active");
    swiperSlides[4].classList.add("swiper-slide-active");
  } else {
    swiperSlides[currentSlide + 1].classList.remove("swiper-slide-active");
    swiperSlides[currentSlide].classList.add("swiper-slide-active");
  }
};
const setSwiperWidth = () => {
  if (window.innerWidth > 1300) swiperWidth = 700;
  else if (window.innerWidth < 301) swiperWidth = 250;
  else if (window.innerWidth < 401) swiperWidth = 300;
  else if (window.innerWidth < 501) swiperWidth = 400;
  else if (window.innerWidth < 601) swiperWidth = 500;
  else if (window.innerWidth < 701) swiperWidth = 600;
  else if (window.innerWidth <= 768) swiperWidth = 700;
  else if (window.innerWidth < 1051) swiperWidth = 300;
  else if (window.innerWidth <= 1300) swiperWidth = 500;
};
const autoplay = () => {
  intervalID = setInterval(forwardSlideAnimation, 5000);
};

const forwardSlideAnimation = () => {
  if (currentSlide >= 4) {
    currentSlide = -1;
  }
  currentSlide++;
  setSwiperWidth();
  slideForward();
};

const onClickForwardSlideAnimation = () => {
  forwardSlideAnimation();
  clearInterval(intervalID);
  autoplay();
};

const backwardSlideAnimation = () => {
  if (currentSlide <= 0) {
    currentSlide = 5;
  }
  currentSlide--;
  setSwiperWidth();
  slideBackward();
};

const onClickBackwardSlideAnimation = () => {
  backwardSlideAnimation();
  clearInterval(intervalID);
  autoplay();
};

autoplay();
arrowNextButton.addEventListener("click", onClickForwardSlideAnimation);
arrowPrevButton.addEventListener("click", onClickBackwardSlideAnimation);
screen.orientation.addEventListener("change", setSwiperWidth);