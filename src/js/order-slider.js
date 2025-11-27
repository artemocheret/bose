const controls = document.querySelector('[data-slide-nav]');
const slider = document.querySelector('[data-slide-container]');
console.log(controls, slider);
const handleChancheSlide = event => {
  const target = event.target;

  if (!target) return;
  console.log(target);
  if (target.tagName === 'BUTTON') {
    const index = target.dataset.slide;
    const translateX = `translateX(-${index}00%)`;
    slider.style.transform = translateX;

    controls.querySelectorAll('[data-slide]').forEach(btn => {
      btn.classList.remove('toggle-nav__button--active');
    });
    target.classList.add('toggle-nav__button--active');
  }
};

controls.addEventListener('click', handleChancheSlide);