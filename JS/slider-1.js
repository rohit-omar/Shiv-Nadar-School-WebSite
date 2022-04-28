const infoContainer = document.querySelectorAll(".info-container");
const infoBarSlider = document.querySelector(".info-bar-slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = infoContainer.length;
let slideWidth = infoContainer[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {
  /*   
    infoContainer[0] = 0
    infoContainer[1] = 100%
    infoContainer[2] = 200%
    */

  infoContainer.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  infoContainer[0].classList.add("active");

//   createNavigationDots();
}

init();

// // Create navigation dots

// function createNavigationDots() {
//   for (let i = 0; i < numberOfImages; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("single-dot");
//     navigationDots.appendChild(dot);

//     dot.addEventListener("click", () => {
//       goToSlide(i);
//     });
//   }

//   navigationDots.children[0].classList.add("active");
// }

// Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  infoBarSlider.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  infoContainer[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}