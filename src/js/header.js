const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.clasgitsList.add("dark-mode");
    themeToggle.checked = true;
}

function toggleTheme() {
    if (themeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
}

themeToggle.addEventListener("change", toggleTheme);

// Лгика для моб.меню


  const openBurgerBtn = document.querySelector('.burger-btn'); // первая кнопка для открытия
  const modalOverlay = document.querySelector('.modal-overlay'); // сама модалка
  const closeModalBtn = document.querySelector('.modal-btn'); // кнопка закрытия (крестик)

  // Открыть модалку
  openBurgerBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  });

  // Закрыть закрытия
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
  }

  closeModalBtn.addEventListener('click', closeModal);

  // Закрыть при клике на фон
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  //Закрыть На Ескейп
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
