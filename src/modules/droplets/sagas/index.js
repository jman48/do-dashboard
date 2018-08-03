import { takeEvery, call, put } from "redux-saga/effects";
import { getDroplets, getDroplet } from "../api";
import {
  DROPLET_LOAD,
  DROPLETS_LOAD_ALL,
  loadedDroplets,
  loadedDroplet,
  loadDropletsFail,
  loadDropletFail,
  DROPLETS_LOAD_ALL_FAIL, DROPLET_LOAD_FAIL
} from '../actions';
import navigationService from "../../core/routes/navigationService";
import { handleError, showError } from "../../core/utils";

function* loadDroplets() {
  try {
    const droplets = yield call(getDroplets);
    yield put(loadedDroplets(droplets));
  } catch (error) {
    handleError(error);
    yield put(
      loadDropletsFail("Failed to load droplets. Please try again later")
    );
  }
}

function* loadDroplet(action) {
  try {
    const dropletID = action.payload;
    navigationService.navigate("Droplet");
    const droplet = yield call(getDroplet, dropletID);
    yield put(loadedDroplet(droplet));
  } catch (error) {
    handleError(error);
    yield put(
      loadDropletFail("Failed to load droplet. Please try again later")
    );
  }
}

function* handleLoadDropletsFail(action) {
  showError("Failed to load droplets", action.payload);
}

function* handleLoadDropletFail(action) {
  showError('Failed to load droplet', action.payload);
}

export function* watchLoadDroplets() {
  yield takeEvery(DROPLETS_LOAD_ALL, loadDroplets);
}

export function* watchLoadDroplet() {
  yield takeEvery(DROPLET_LOAD, loadDroplet);
}

export function* watchLoadDropletsFail() {
  yield takeEvery(DROPLETS_LOAD_ALL_FAIL, handleLoadDropletsFail);
}

export function* watchLoadDropletFail() {
  yield takeEvery(DROPLET_LOAD_FAIL, handleLoadDropletFail);
}
