import axios from 'axios';

export function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    key: '51454782-596154fd852b0fd151dc4a6b5',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    per_page: '6',
  });

  return axios(`${baseURL}${searchParams}`);
}
