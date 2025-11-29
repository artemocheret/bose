const modal = document.querySelector('[data-order_modal]');
const openBtn = document.querySelector('[data-order_modal-open]');
const closeBtn = document.querySelector('[data-order_modal-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is__hidden');
  document.body.classList.toggle('no-scroll');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
