import unsplash from '../api/unsplash';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchPhotosSaga({ payload }) {
  const { term, page } = payload;
  try {
    const res = yield call([unsplash, unsplash.get], '/search/photos', {
      params: { query: term, per_page: 25, page: page || 1 }
    });
    yield put({ type: 'FETCH_PHOTOS_SUCCESS', payload: res.data.results });
  } catch (e) {
    //TO DO - Error Handling
    console.log(e);
  }
}

export function* fetchPhotosWatcherSaga() {
  yield takeLatest('FETCH_PHOTOS', fetchPhotosSaga);
}
