(() => {
  const refs = {
    // Додати атрибут data-send-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-send-open]"),
    // Додати атрибут data-send-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-send-close]"),
    // Додати атрибут data-send на бекдроп модалки
    modal: document.querySelector("[data-send]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();