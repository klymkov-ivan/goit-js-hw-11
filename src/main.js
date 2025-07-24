import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('form');
form.addEventListener('submit', handleGallery);

function handleGallery(event) {
  event.preventDefault();
  showLoader();

  const searchQuery = event.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    hideLoader();
    iziToast.show({
      message: 'Please, Fill the form!',
      position: 'topCenter',
      color: '#ef4040',
      messageColor: '#fff',
      titleColor: '#fff',
    });
    return;
  }

  clearGallery();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
          color: '#ef4040',
          messageColor: '#fff',
          titleColor: '#fff',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => hideLoader());
}
