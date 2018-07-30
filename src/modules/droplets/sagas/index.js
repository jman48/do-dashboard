import { takeEvery, call, put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { getDroplets, getDroplet } from '../api';
import {
  DROPLET_LOAD,
  DROPLETS_LOAD_ALL,
  loadedDroplets,
  loadedDroplet
} from '../actions';
import navigationService from '../../core/routes/navigationService';
import { handleError } from '../../core/utils';

const crashlytics = firebase.crashlytics();

function* loadDroplets() {
  try {
    const droplets = yield call(getDroplets);
    yield put(loadedDroplets(droplets));
  } catch (error) {
    handleError(error);
  }
}

function* loadDroplet(action) {
  try {
    const dropletID = action.payload;
    navigationService.navigate('Droplet');
    const droplet = yield call(getDroplet, dropletID);
    yield put(loadedDroplet(droplet));
  } catch (error) {
    handleError(error);
  }
}

export function* watchLoadDroplets() {
  yield takeEvery(DROPLETS_LOAD_ALL, loadDroplets);
}

export function* watchLoadDroplet() {
  yield takeEvery(DROPLET_LOAD, loadDroplet);
}
