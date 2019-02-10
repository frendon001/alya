import { call, put, takeLatest } from 'redux-saga/effects';

function* AuthStatusSaga({ payload }) {
  const { auth } = payload;
  try {
    const res = yield call([auth.isSignedIn, auth.isSignedIn.get]);
    if (res) {
      yield put({ type: 'AUTH_SIGNED_IN' });
    } else {
      yield put({ type: 'AUTH_SIGNED_OUT' });
    }
  } catch (e) {
    //TO DO - Error Handling
    console.log(e);
  }
}

export function* authStatusWatcherSaga() {
  yield takeLatest('AUTH_CHECK_STATUS', AuthStatusSaga);
}

// function* AuthSignInSaga({payload}) {
//   const { auth } = payload;
//   try {
//     const res = yield call([auth.isSignedIn, auth.isSignedIn.get]);
//     yield put({ type: 'AUTH_SIGN_IN_SUCCESS', payload: res });
//   } catch (e) {
//     //TO DO - Error Handling
//     console.log(e);
//   }
// }

// function* AuthSignOutSaga({payload}) {
//   const { auth } = payload;
//   try {
//     const res = yield call([auth.isSignedIn, auth.isSignedIn.get]);
//     yield put({ type: 'AUTH_SIGN_OUT_SUCCESS', payload: res });
//   } catch (e) {
//     //TO DO - Error Handling
//     console.log(e);
//   }
// }

// export function* authSignInWatcherSaga() {
//   yield takeLatest('AUTH_SIGN_IN', AuthSignInSaga);
// }

// export function* authSignOutWatcherSaga() {
//   yield takeLatest('AUTH_SIGN_OUT', AuthSignOutSaga);
// }
