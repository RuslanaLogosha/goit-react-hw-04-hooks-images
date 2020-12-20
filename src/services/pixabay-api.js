import axios from 'axios';
import { get } from 'react-scroll/modules/mixins/scroller';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = '18957101-8b16af6433f6d6830b4844a72';

const image_type = 'photo';
const orientation = 'horizontal';

async function fetchImages(requestKey, page) {
  try {
    return await axios({
      method: get,
      url: 'https://pixabay.com/api/',
      params: {
        q: requestKey,
        page: page,
        key: '18957101-8b16af6433f6d6830b4844a72',
        image_type: image_type,
        orientation: orientation,
        per_page: 12,
      },
    });
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchImages };

export default api;

// const API_KEY = '18957101-8b16af6433f6d6830b4844a72';
// const BASE_URL = 'https://pixabay.com/api/';
// const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
