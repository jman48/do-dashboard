import { takeEvery, call, put } from 'redux-saga/effects';
import { getAccountDetails, storeToken } from '../api';
import { AUTH_SAVE, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';
import NavigationService from '../../core/routes/navigationService';
import { setToken } from '../../core/api';

function* getAccountDetailsSaga(action) {
  try {
    const token = action.payload;

    const accountDetails = yield call(getAccountDetails, token);
    console.log('Account Details are: ', accountDetails);
    setToken(token);
    yield put({
      type: AUTH_SUCCESS,
      payload: {
        ...accountDetails,
        token
      }
    });
  } catch (error) {
    yield put({ type: AUTH_FAILURE });
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
