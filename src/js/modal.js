(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-subscribe-open]'),
    closeModalBtn: document.querySelector('[data-modal-subscribe-close]'),
    modal: document.querySelector('[data-modal-subscribe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const RefsContact = {
    openModalBtns: document.querySelectorAll('[data-modal-contact-open]'),
    closeModalBtn: document.querySelector('[data-modal-contact-close]'),
    modal: document.querySelector('[data-modal-contact]'),
  };
  for (let i = 0; i < RefsContact.openModalBtns.length; i++) {
    RefsContact.openModalBtns[i].addEventListener('click', toggleModal);
  }
  console.log(RefsContact.closeModalBtn);
  RefsContact.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    RefsContact.modal.classList.toggle('is-hidden');
    console.log('click');
  }
})();
