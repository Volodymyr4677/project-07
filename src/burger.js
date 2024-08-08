(() => {
  const refs = {
    // Додати атрибут data-burger-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-burger-open]"),
    // Додати атрибут data-burger-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-burger-close]"),
    // Додати атрибут data-burger на бекдроп модалки
    modal: document.querySelector("[data-burger]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();