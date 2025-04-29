// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
// import spriteUrl from '../img/sprite.svg?url';

// const faqAccordion = new Accordion('.faq-list', {
//   duration: 150,
//   showOne: true,
//   openOnInit: [0],
//   triggerClass: ''
//   onOpen: function (currentElement) {
//     const allItems = document.querySelectorAll('.faq-item');

//     allItems.forEach(function (item) {
//       item.classList.remove('ac-active');

//       const svgUse = item.querySelector('.faq-btn-accordion use');
//       if (svgUse) {
//         svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
//       }
//     });

//     const openedItem = currentElement.closest('.faq-item');

//     if (openedItem) {
//       openedItem.classList.add('ac-active');

//       const svgUse = openedItem.querySelector('.faq-btn-accordion use');
//       if (svgUse) {
//         svgUse.setAttribute('href', `${spriteUrl}#icon-faq-up`);
//       }
//     }
//   },
//   onClose: function (currentElement) {
//     const closedItem = currentElement.closest('.faq-item');
//     if (closedItem) {
//       closedItem.classList.remove('ac-active');

//       const svgUse = closedItem.querySelector('.faq-btn-accordion use');
//       if (svgUse) {
//         svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
//       }
//     }
//   },
// });

// const allItems = document.querySelectorAll('.faq-item');
// allItems.forEach(function (item) {
//   const svgUse = item.querySelector('.faq-btn-accordion use');
//   if (svgUse) {
//     svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
//   }
// });

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteUrl from '/img/sprite.svg?url';

// Ініціалізація акордеону з правильною кнопкою-тригером
const faqAccordion = new Accordion('.faq-list', {
  duration: 150,
  showOne: true,
  openOnInit: [0],
  triggerClass: 'faq-btn-accordion', // вказуємо реальний клас кнопки
  onOpen(currentElement) {
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('ac-active');
      const svgUse = item.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
      }
    });

    const openedItem = currentElement.closest('.faq-item');
    if (openedItem) {
      openedItem.classList.add('ac-active');
      const svgUse = openedItem.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', `${spriteUrl}#icon-faq-up`);
      }
    }
  },
  onClose(currentElement) {
    const closedItem = currentElement.closest('.faq-item');
    if (closedItem) {
      closedItem.classList.remove('ac-active');
      const svgUse = closedItem.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
      }
    }
  },
});

// Фікс SVG: після ініціалізації лишаємо перший відкритим
document.querySelectorAll('.faq-item').forEach((item, index) => {
  const svgUse = item.querySelector('.faq-btn-accordion use');
  if (svgUse) {
    if (index === 0) {
      item.classList.add('ac-active');
      svgUse.setAttribute('href', `${spriteUrl}#icon-faq-up`);
    } else {
      svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
    }
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault;
    if (!event.target.closest('.faq-btn-accordion')) {
      const trigger = item.querySelector('.faq-btn-accordion');
      if (trigger) {
        trigger.click();
      }
    }
  });
});
