import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
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
    return;
  }

  clearGallery();

  getImagesByQuery(searchQuery)
    .then(data => {
      createGallery(data.hits);
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
          color: '#ef4040',
          messageColor: '#fff',
          titleColor: '#fff',
        });
      }
      return;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => hideLoader());
}

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
