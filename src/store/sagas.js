import { all } from "redux-saga/effects";
import * as auth from "../modules/auth/sagas";
import * as droplets from "../modules/droplets/sagas";
import * as dropletActions from "../modules/droplets/sagas/dropletActions";

function getIters(sagas) {
  return Object.values(sagas).map(fn => fn());
}

export default function* sagasToRun() {
  yield all([
    ...getIters(auth),
    ...getIters(droplets),
    ...getIters(dropletActions)
  ]);
}
