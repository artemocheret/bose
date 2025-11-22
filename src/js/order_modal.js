const openBtn = document.querySelector('[data-order_modal-open]');
const modal = document.querySelector('[data-order_modal]');
const closeBtn = document.querySelector('[data-order_modal-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
