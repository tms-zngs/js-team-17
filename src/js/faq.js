import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteUrl from '/img/sprite.svg?url';

const faqAccordion = new Accordion('.faq-list', {
  duration: 150,
  showOne: true,
  openOnInit: [0],
  triggerClass: 'faq-question',
  elementClass: 'faq-item',
  panelClass: 'faq-answer',
  onOpen: function (currentElement) {
    const openedItem = currentElement.closest('.faq-item');
    if (!openedItem) return;

    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(function (item) {
      item.classList.remove('ac-active');
      const svgUse = item.querySelector('.faq-btn-accordion use');
      if (svgUse) {
        svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
      }
    });

    openedItem.classList.add('ac-active');
    const svgUseActive = openedItem.querySelector('.faq-btn-accordion use');
    if (svgUseActive) {
      svgUseActive.setAttribute('href', `${spriteUrl}#icon-faq-up`);
    }
  },
  onClose: function (currentElement) {
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

const allItems = document.querySelectorAll('.faq-item');
allItems.forEach(function (item) {
  const svgUse = item.querySelector('.faq-btn-accordion use');
  if (svgUse && !item.classList.contains('ac-active')) {
    svgUse.setAttribute('href', `${spriteUrl}#icon-faq-down`);
  } else if (svgUse && item.classList.contains('ac-active')) {
    svgUse.setAttribute('href', `${spriteUrl}#icon-faq-up`);
  }
});
