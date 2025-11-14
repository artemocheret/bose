const openBtn = document.querySelector('[data-photo-black]');
const modal = document.querySelector('[data-photo]');
const closeBtn = document.querySelector('[data-photo-white]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
