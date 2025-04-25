import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqAccordion = new Accordion('.faq-list', {
  duration: 400,
  showOne: true,
  onToggle: function (event) {
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(function (item) {
      item.classList.remove('ac-active');
    });
  },
});

const faqItems = document.querySelectorAll('.faq-item');

function toggleActiveClass(event) {
  const item = event.target.closest('.faq-item');
  if (item) {
    closeAllItems();

    item.classList.add('ac-active');
  }
}

function closeAllItems() {
  faqItems.forEach(function (i) {
    i.classList.remove('ac-active');
  });
}

faqItems.forEach(function (item) {
  const button = item.querySelector('.faq-btn-accordion');
  button.addEventListener('click', toggleActiveClass);
});

faqItems[0].classList.add('ac-active');
faqItems[0].querySelector('.faq-answer').style.display = 'block'; // Показуємо відповідь першого елемента
