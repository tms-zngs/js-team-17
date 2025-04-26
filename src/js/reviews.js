import { getResponse } from './get-api';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/reviews.css';

const list = document.querySelector('.swiper-wrapper');
const slider = document.querySelector('.swiper');

const fragment = document.createDocumentFragment();
// getResponse()
//   .then(data => {
//     console.log(data);
//     data.forEach(({ _id, author, avatar_url, review }) => {
//       const markup = `
//       <li class="reviews-item" data-id="${_id}">
//         <p class="reviews-item-text">${review}</p>
//         <div class="container-reviews-author">
//           <img class="reviews-item-img" src="${avatar_url}" alt="${author}"/>
//           <h3 class="reviews-item-name">${author}</h3>
//         </div>
//       </li>
//       `;
//       const temp = document.createElement('div');
//       temp.insertAdjacentHTML('beforeend', markup);
//       fragment.append(...temp.children);
//     });
//     list.append(fragment);
//   })
//   .catch();

initReviewsSection();

async function initReviewsSection() {
  const data = await getResponse();
  createMarkup(data);
  initSwiper();
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
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
}
