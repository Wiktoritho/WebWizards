export function initializeForm() {
  const acceptance = document.querySelector('#acceptance');
  const iconCheck = document.querySelector('.form__check');
  const submitButton = document.querySelector('.form__button');
  const nameInput = document.getElementById('name');
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const formRequire = document.querySelector('.form__require');
  const closeIcon = document.querySelector('.modal__icon');
  const openButton = document.querySelector('#contactButton');
  const modal = document.querySelector('.modal');
  const contactButton = document.querySelector('#contactButton2');

  let accept = false;

  acceptance.addEventListener('click', () => {
    if (accept) {
      iconCheck.style.display = 'none';
      accept = false;
    } else {
      iconCheck.style.display = 'block';
      accept = true;
    }
  });

  submitButton.addEventListener('click', e => {
    if (
      nameInput.value === '' ||
      surnameInput.value === '' ||
      emailInput.value === '' ||
      accept === false
    ) {
      formRequire.style.display = 'block';
      e.preventDefault();
    } else {
      formRequire.style.display = 'none';

      const formData = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        accept: accept,
      };

      const formDataJSON = JSON.stringify(formData);
      console.log(formDataJSON);
    }
  });

  function openModal() {
    modal.style.display = 'block';
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 0);
  }

  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 1000);
  }

  openButton.addEventListener('click', openModal);
  contactButton.addEventListener('click', openModal);
  closeIcon.addEventListener('click', closeModal);
}
