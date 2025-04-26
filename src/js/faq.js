import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqAccordion = new Accordion('.faq-list', {
  duration: 300,
  showOne: true,
  openOnInit: [0],
  onOpen: function (currentElement) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(function (item) {
      item.classList.remove('ac-active');

      const svgUse = item.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', 'img/sprite.svg#icon-faq-down');
      }
    });

    const openedItem = currentElement.closest('.faq-item');

    if (openedItem) {
      openedItem.classList.add('ac-active');

      const svgUse = openedItem.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', 'img/sprite.svg#icon-faq-up');
      }
    }
  },
  onClose: function (currentElement) {
    const closedItem = currentElement.closest('.faq-item');
    if (closedItem) {
      closedItem.classList.remove('ac-active');
    }
  },
});

const faqTriggers = document.querySelectorAll('.faq-btn-accordion');

faqTriggers.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const svgUse = btn.querySelector('use');
    const parentItem = btn.closest('.faq-item');
    const isOpen = parentItem.classList.contains('ac-active');

    if (isOpen) {
      svgUse.setAttribute('href', 'img/sprite.svg#icon-faq-down');
    } else {
      svgUse.setAttribute('href', 'img/sprite.svg#icon-faq-up');
    }
  });
});
