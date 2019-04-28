import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as worker from './worker';

export default function* watcherSaga() {
    yield takeLatest(
      actionTypes.CHANGE_DIRECTION_REQUEST,
      worker.watchChangeDirectionRequest,
    );
  }