const page = document.querySelector('.page');
const slides = page.getElementsByTagName('div');
var index = 0;

function prevSlide(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

function nextSlide(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}