import { takeEvery, call, put } from "redux-saga/effects";
import * as API from "../api";
import {
  DROPLET_POWER_OFF, DROPLET_POWER_OFF_SUCCESS, DROPLET_POWER_ON, DROPLET_POWER_ON_SUCCESS,
  DROPLET_REBOOT,
  DROPLET_REBOOT_SUCCESS
} from '../actions/dropletActions';
import { handleError, showError } from "../../core/utils";
import { confirm, CANCELLED } from '../utils';

function* reboot(action) {
  console.log('Running droplet reboot');
  try {
    yield call(confirm, 'Reboot', 'Are you sure you want to reboot this droplet?');
    yield call(API.reboot, action.payload);
    yield put({ type: DROPLET_REBOOT_SUCCESS });
  } catch (error) {
    if (error === CANCELLED) return;
    showError('Reboot failed', 'Failed to reboot droplet. Please check your internet connection and try again soon');
    handleError(error);
  }
}

function* powerOff(action) {
  console.log('Running droplet power off');
  try {
    yield call(confirm, 'Power off', 'Are you sure you want to power off this droplet?');
    console.log('Powering off: ', action.payload);
    yield call(API.powerOff, action.payload);
    yield put({ type: DROPLET_POWER_OFF_SUCCESS});
  } catch (error) {
    if (error === CANCELLED) return;
    showError('Power off failed', 'Failed to power off droplet. Please check your internet connection and try again');
    handleError(error);
  }
}

function* powerOn(action) {
  console.log('Running droplet power on');
  try {
    yield call(confirm, 'Power on', 'Are you sure you want to power on this droplet?');
    console.log('Powering on: ', action.payload);
    yield call(API.powerOn, action.payload);
    yield put({ type: DROPLET_POWER_ON_SUCCESS});
  } catch (error) {
    if (error === CANCELLED) return;
    showError('Power on failed', 'Failed to power on droplet. Please check your internet connection and try again');
    handleError(error);
  }
}

export function* watchReboot() {
  yield takeEvery(DROPLET_REBOOT, reboot);
}

export function* watchPowerOff() {
  yield takeEvery(DROPLET_POWER_OFF, powerOff);
}

export function* watchPowerOn() {
  yield takeEvery(DROPLET_POWER_ON, powerOn);
}
