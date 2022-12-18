// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});

// Grab HTML Elements
const btnC = document.querySelector("button.mobile-menu-button-close");

// Add Event Listeners
btnC.addEventListener("click", () => {
menu.classList.toggle("hidden");
});