const modal = document.querySelector('[data-order-modal]');
const openBtn = document.querySelector('[data-order-modal-open]');
const closeBtn = document.querySelector('[data-order-modal-close]');

console.log(modal, openBtn, closeBtn);

const handleToggleModal = () => {
  modal.classList.toggle('is__hidden');
  document.body.classList.toggle('no-scroll');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
