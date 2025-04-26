const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
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




  const openBurgerBtn = document.querySelector('.burger-btn'); // первая кнопка
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal-btn'); // кнопка закрытия в модалке

  // Открыть модалку
  openBurgerBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });

  // Закрыть модалку
  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
