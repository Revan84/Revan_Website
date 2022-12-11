// JavaScript file
const pageSlider = document.getElementById('page-slider');
const slides = pageSlider.querySelectorAll('.absolute');

let currentSlide = 0;

// Function to change to the next slide
function goToNextSlide() {
  slides[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0%)';
}

// Function to change to the previous slide
function goToPreviousSlide() {
  slides[currentSlide].style.transform = 'translateX(100%)';
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0%)';
}

// Attach event listeners to the buttons
const previousSlideButton = document.getElementById('previous-slide-button');
previousSlideButton.addEventListener('click', goToPreviousSlide);

const nextSlideButton = document.getElementById('next-slide-button');
nextSlideButton.addEventListener('click', goToNextSlide);




// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});