const openBtn = document.querySelector('[data-hero_modal-open]');
const modal = document.querySelector('[data-hero_modal]');
const closeBtn = document.querySelector('[data-hero_modal-close]');

const handleToggleHeroModal = () => {
  modal.classList.toggle('is__hidden');
  document.body.classList.toggle('no-scroll');
};

openBtn.addEventListener('click', handleToggleHeroModal);
closeBtn.addEventListener('click', handleToggleHeroModal);
