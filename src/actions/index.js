import unsplash from '../api/unsplash';
import { FETCH_PHOTOS } from './types';

export const fetchPhotos = (term, page) => async dispatch => {
  const res = await unsplash.get('/search/photos', {
    params: { query: term, per_page: 25, page: page || 1 }
  });
  dispatch({ type: FETCH_PHOTOS, payload: res.data.results });
};
