import axios from 'axios';
import { get } from 'react-scroll/modules/mixins/scroller';

const url = 'https://pixabay.com/api/';
const key = '18957101-8b16af6433f6d6830b4844a72';
const image_type = 'photo';
const orientation = 'horizontal';

async function fetchImages(requestKey, page) {
  try {
    return await axios({
      method: get,
      url: url,
      params: {
        q: requestKey,
        page,
        key,
        image_type,
        orientation,
        per_page: 12,
      },
    });
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchImages };

export default api;
