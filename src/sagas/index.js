import { all } from 'redux-saga/effects';
import { fetchPhotosWatcherSaga } from './unsplashSagas';
import { authStatusWatcherSaga } from './authSagas';

export default function* rootSaga() {
  yield all([fetchPhotosWatcherSaga(), authStatusWatcherSaga()]);
}
