import { getResponse } from './get-api';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/reviews.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const list = document.querySelector('.swiper-wrapper');

const fragment = document.createDocumentFragment();

initReviewsSection();

async function initReviewsSection() {
  try {
    const data = await getResponse();
    createMarkup(data);
    initSwiper();
  } catch (error) {
    iziToast.info({
      title: 'Error',
      message: 'Reviews not found!',
      position: 'topRight',
    });
    list.innerHTML = `
    <li class="swiper-slide">
    <h3 class="title-error">
      Oops! Looks like the reviews didn’t load. We’re working on it — please check back shortly!
    </h3>
    </li>`;
    const btnPrev = document.querySelector('.swiper-button-prev');
    const btnNext = document.querySelector('.swiper-button-next');
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnPrev.style.opacity = 0.3;
    btnNext.style.opacity = 0.3;
  }
}

function createMarkup(arr) {
  arr.forEach(({ _id, author, avatar_url, review }) => {
    const markup = `
      <li class="swiper-slide" data-id="${_id}">
        <p class="reviews-item-text">${review}</p>
        <div class="container-reviews-author">
          <img class="reviews-item-img" src="${avatar_url}" alt="${author}"/>
          <h3 class="reviews-item-name">${author}</h3>
        </div>
      </li>
      `;
    const temp = document.createElement('div');
    temp.insertAdjacentHTML('beforeend', markup);
    fragment.append(...temp.children);
  });
  list.append(fragment);
}

function initSwiper() {
  new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 32,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoHeight: true,
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
}
