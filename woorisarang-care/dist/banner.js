const slides = [...document.querySelectorAll('.hero-image')];
const titles = [...document.querySelectorAll('.hero-heading')];
const descriptions = [...document.querySelectorAll('.hero-description')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeIndex = 0;
let interval;

function advanceSlide() {
  activeIndex = (activeIndex + 1) % slides.length;
  slides.forEach((slide, index) => slide.classList.toggle('is-active', index === activeIndex));
  titles.forEach((title, index) => { title.hidden = index !== activeIndex; });
  descriptions.forEach((description, index) => { description.hidden = index !== activeIndex; });
}

function updateRotation() {
  clearInterval(interval);
  if (!reducedMotion.matches) {
    interval = setInterval(advanceSlide, 5500);
  }
}

reducedMotion.addEventListener('change', updateRotation);
updateRotation();
