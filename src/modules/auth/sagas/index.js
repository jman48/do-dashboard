import { takeEvery, call, put } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { getAccountDetails, storeToken } from '../api';
import { AUTH_SAVE, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';
import NavigationService from '../../core/routes/navigationService';
import { setToken } from '../../core/api';

function* getAccountDetailsSaga(action) {
  try {
    const token = action.payload;

    const accountDetails = yield call(getAccountDetails, token);
    setToken(token);
    yield put({
      type: AUTH_SUCCESS,
      payload: {
        ...accountDetails,
        token
      }
    });
  } catch (error) {
    console.log('Auth error: ');
    yield put({ type: AUTH_FAILURE });
  }
}

function rehydrate(action) {
  console.log('Hydrate is: ', action);
  const { auth: { token }} = action.payload;
  return setToken(token);
}

function changePage() {
  NavigationService.navigate('Private');
}

export function* watchAuth() {
  yield takeEvery(AUTH_SAVE, getAccountDetailsSaga);
}

export function* watchAuthSuccess() {
  yield takeEvery(AUTH_SUCCESS, changePage);
}

export function* watchRehydrate() {
  yield takeEvery(REHYDRATE, rehydrate)
}
