import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqAccordion = new Accordion('.faq-list', {
  duration: 150,
  showOne: true,
  openOnInit: [0],
  onOpen: function (currentElement) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(function (item) {
      item.classList.remove('ac-active');

      const svgUse = item.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', '/img/sprite.svg#icon-faq-down');
      }
    });

    const openedItem = currentElement.closest('.faq-item');

    if (openedItem) {
      openedItem.classList.add('ac-active');

      const svgUse = openedItem.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', '/img/sprite.svg#icon-faq-up');
      }
    }
  },
  onClose: function (currentElement) {
    const closedItem = currentElement.closest('.faq-item');
    if (closedItem) {
      closedItem.classList.remove('ac-active');

      const svgUse = closedItem.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', '/img/sprite.svg#icon-faq-down');
      }
    }
  },
});
