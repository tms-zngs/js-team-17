import { getResponse } from './get-api';

const list = document.querySelector('.reviews-list');

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
          <h3 class="reviews-item-name">${author}</h3>
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
