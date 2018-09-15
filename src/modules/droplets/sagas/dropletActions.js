import { takeEvery, call, put } from "redux-saga/effects";
import * as API from "../api";
import {
  DROPLET_REBOOT
} from '../actions';
import { handleError, showError } from "../../core/utils";
import { confirm, CANCELLED } from '../utils';

function* reboot(action) {
  console.log('Running droplet reboot');
  try {
    yield call(confirm, 'Are you sure you want to reboot this droplet?');
    yield call(API.reboot, action.payload);
  } catch (error) {
    if (error === CANCELLED) return;
    showError('Reboot failed', 'Failed to reboot droplet. Please check your internet connection and try again soon');
    handleError(error);
  }
}

export function* watchReboot() {
  yield takeEvery(DROPLET_REBOOT, reboot);
}
