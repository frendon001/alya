import { all } from 'redux-saga/effects';
import { fetchPhotosWatcherSaga } from './unsplashSagas';

export default function* rootSaga() {
  yield all([fetchPhotosWatcherSaga()]);
}
