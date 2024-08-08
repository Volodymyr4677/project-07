(() => {
  const refs = {
    // Додати атрибут data-hero-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-hero-open]"),
    // Додати атрибут data-hero-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-hero-close]"),
    // Додати атрибут data-hero на бекдроп модалки
    modal: document.querySelector("[data-hero]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();