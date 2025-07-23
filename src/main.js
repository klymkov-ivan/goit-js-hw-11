import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const form = document.querySelector('form');
form.addEventListener('submit', handleGallery);

function handleGallery(event) {
  event.preventDefault(); // Обов’язково!

  const searchQuery = event.target.elements['search-text'].value.trim();

  if (!searchQuery) return;

  getImagesByQuery(searchQuery)
    .then(response => {
      createGallery(response.data.hits); // бо з Pixabay приходить { hits: [...] }
    })
    .catch(error => {
      console.log(error);
    });
}
