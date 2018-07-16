import { takeEvery, call, put } from 'redux-saga/effects';
import { storeToken } from '../api';
import { AUTH_SAVE, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';
import NavigationService from '../../core/routes/navigationService';
import { setToken } from '../../core/api';

function* saveAuth(action) {
  try {
    const token = action.payload;

    yield call(storeToken, token);
    setToken(token);
    yield put({
      type: AUTH_SUCCESS,
      payload: token
    });
  } catch (error) {
    yield put({ type: AUTH_FAILURE });
  }
}

function changePage() {
  NavigationService.navigate('Private');
}

export function* watchAuth() {
  yield takeEvery(AUTH_SAVE, saveAuth);
}

export function* watchAuthSuccess() {
  yield takeEvery(AUTH_SUCCESS, changePage);
}
