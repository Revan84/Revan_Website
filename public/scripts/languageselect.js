// Grab HTML Elements
const ls = document.querySelector("button.language-selector");
const lm = document.querySelector(".langugage-menu");

// Add Event Listeners
ls.addEventListener("click", () => {
lm.classList.toggle("hidden");
});
