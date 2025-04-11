const nextBtnSlider = document.querySelector(".btn__next");
const backBtnSlider = document.querySelector(".btn__back");
const Frappuccino = document.querySelector(".Frappuccino");
const Macchiato = document.querySelector(".Macchiato");
const IceCoffee = document.querySelector(".Ice__coffee");

let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const slides = document.querySelectorAll(".slider__container");
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".btn__next");
const backBtn = document.querySelector(".btn__back");
const controls = document.querySelectorAll(".slider__controls");
function updateSlideWidth() {
  const slideWidth = slider.clientWidth;
  slides.forEach((slide) => {
    slide.style.width = `${slideWidth}px`;
  });
  sliderLine.style.width = `${slideWidth * slides.length}px`;
  offset = 0;
  moveSlider();
}
function moveSlider() {
  sliderLine.style.transform = `translateX(${-offset}px)`;
}
nextBtn.addEventListener("click", () => {
  const slideWidth = slider.clientWidth;
  offset += slideWidth;
  if (offset >= slideWidth * slides.length) {
    offset = 0;
  }
  updateControls();
  moveSlider();
});
backBtn.addEventListener("click", () => {
  const slideWidth = slider.clientWidth;
  offset -= slideWidth;
  if (offset < 0) {
    offset = slideWidth * (slides.length - 1);
  }
  updateControls();
  moveSlider();
});
function updateControls() {
  controls.forEach((control) => control.classList.remove("active"));
  const activeIndex = offset / slider.clientWidth;
  controls[activeIndex].classList.add("active");
}
let startX = 0;
let endX = 0;
slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});
slider.addEventListener("touchmove", (event) => {
  endX = event.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX - endX > 50) {
    nextBtn.click();
  } else if (endX - startX > 50) {
    backBtn.click();
  }
});

window.addEventListener("resize", updateSlideWidth);

updateSlideWidth();
updateControls();

const phones = document.querySelector(".phone__img");
phones.addEventListener("mouseover", (event) => {
  phones.style.transition = "0.3s all";
  phones.style.transform = "rotateZ(2deg)";
});
phones.addEventListener("mouseleave", (event) => {
  phones.style.transform = "rotateZ(-2deg)";
});

/*main menu */
const menuButton = document.querySelector(".main__inner-button");
const menuButtonImg = document.querySelector(".main__inner-button__img");
menuButton.addEventListener("mouseover", (event) => {
  menuButtonImg.style.transition = "0.3s all";
  menuButtonImg.style.display = "block";
});
menuButton.addEventListener("mouseleave", (event) => {
  menuButtonImg.style.transition = "0.3s all";
  menuButtonImg.style.display = "none";
});

/*btns photo*/
const dowloadButton = document.querySelector(".app__store-btn");
const dowloadButtonImg = document.querySelector(".apple__btn-img");
dowloadButton.addEventListener("mouseover", (event) => {
  dowloadButtonImg.style.transition = "0.3s all";
  dowloadButtonImg.classList.add("active");
});
dowloadButton.addEventListener("mouseleave", (event) => {
  dowloadButtonImg.style.transition = "0.3s all";
  dowloadButtonImg.classList.remove("active");
});

const dowloadGPButton = document.querySelector(".google__play-btn");
const dowloadGPButtonImg = document.querySelector(".google__btn-img");
dowloadGPButton.addEventListener("mouseover", (event) => {
  dowloadGPButtonImg.style.transition = "0.3s all";
  dowloadGPButtonImg.classList.add("active");
});
dowloadGPButton.addEventListener("mouseleave", (event) => {
  dowloadGPButtonImg.style.transition = "0.3s all";
  dowloadGPButtonImg.classList.remove("active");
});

// slider btn

const sliderNextBtnImg = document.querySelector(".next__btn-img");
nextBtnSlider.addEventListener("mouseover", (event) => {
  sliderNextBtnImg.classList.add("active");
});
nextBtnSlider.addEventListener("mouseleave", (event) => {
  sliderNextBtnImg.classList.remove("active");
});
const sliderBackBtnImg = document.querySelector(".back__btn-img");
backBtnSlider.addEventListener("mouseover", (event) => {
  sliderBackBtnImg.classList.add("active");
});
backBtnSlider.addEventListener("mouseleave", (event) => {
  sliderBackBtnImg.classList.remove("active");
});
// const burger = document.querySelector(".menu-list__burger");
// const body = document.querySelector(".body_class");
// const menuItem = document.querySelector(".menu-item");
// body.addEventListener("click", (event) => {
//   if (burger) {
//     body.classList.add("active");
//   }
// });
