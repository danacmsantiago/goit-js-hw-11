export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41046484-2b9907bc2ae048071dab6e2c4';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: '',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
