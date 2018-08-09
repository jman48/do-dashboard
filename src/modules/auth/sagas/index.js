import { takeEvery, call, put } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { getAccountDetails } from '../api';
import { AUTH_SAVE, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../actions';
import NavigationService from '../../core/routes/navigationService';
import { setToken, clearToken } from '../../core/api';
import { handleError } from '../../core/utils';

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
    handleError(error);
    yield put({ type: AUTH_FAILURE, payload: 'Invalid username or password' });
  }
}

function* logout() {
  try {
    clearToken();
    NavigationService.navigate('Public');
  } catch (error) {
    handleError(error);
  }
}

function rehydrate(action) {
  try {
    const { token } = action.payload;
    return setToken(token);
  } catch (error) {
    handleError(error);
  }
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

export function* watchAuthLogout() {
  yield takeEvery(AUTH_LOGOUT, logout);
}

export function* watchRehydrate() {
  yield takeEvery(REHYDRATE, rehydrate)
}
