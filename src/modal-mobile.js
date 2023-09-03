export function initializeModalMobile() {
  const modal = document.querySelector('.modal-mobile');
  const openModalButton = document.querySelector('.hamburger-icon');
  const closeModalButton = document.querySelector('.modal-mobile__exit');
  const modalButtons = document.querySelectorAll('.modal-mobile__element');

  function openModalMobile() {
    modal.style.display = 'block';
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 0);
  }

  function closeModalMobile() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 1000);
  }

  openModalButton.addEventListener('click', openModalMobile);
  closeModalButton.addEventListener('click', closeModalMobile);

  modalButtons.forEach(button => {
    button.addEventListener('click', closeModalMobile);
  });
}
