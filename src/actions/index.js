//import unsplash from '../api/unsplash';
//import { FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS } from './types';

// export const fetchPhotos = (term, page) => async dispatch => {
//   const res = await unsplash.get('/search/photos', {
//     params: { query: term, per_page: 25, page: page || 1 }
//   });
//   dispatch({ type: FETCH_PHOTOS, payload: res.data.results });
// };

export const fetchPhotos = (term, page) => ({
  type: 'FETCH_PHOTOS',
  payload: { term, page }
});

export const authCheckStatus = auth => ({
  type: 'AUTH_CHECK_STATUS',
  payload: { auth }
});

// export const authSignIn = auth => ({
//   type: 'AUTH_SIGN_IN',
//   payload: { auth }
// });

// export const authSignOut = auth => ({
//   type: 'AUTH_SIGN_OUT',
//   payload: { auth }
// });
