import { getResponse } from './get-api';

const list = document.querySelector('.reviews-list');

// createMarkup();

// async function createMarkup() {
//   const data = await getResponse();
//   console.log(data);

//   return data.forEach(({ _id, author, avatar_url, review }) => {

//   });
// }

const fragment = document.createDocumentFragment();
getResponse()
  .then(data => {
    console.log(data);
    data.forEach(({ _id, author, avatar_url, review }) => {
      const markup = `
      <li class="reviews-item" data-id="${_id}">
        <p class="reviews-item-text">${review}</p>
        <div class="container-reviews-author">
          <img class="reviews-item-img" src="${avatar_url}" alt="${author}"/>
          <p class="reviews-item-name">${author}</p>
        </div>
      </li>
      `;
      const temp = document.createElement('div');
      temp.insertAdjacentHTML('beforeend', markup);
      fragment.append(...temp.children);
    });
    list.append(fragment);
  })
  .catch();
