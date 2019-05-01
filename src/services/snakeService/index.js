import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as worker from './worker';

export default function* watcherSaga() {
    yield takeLatest(
      actionTypes.MOVE_REQUEST,
      worker.watchMoveRequest,
    );
    yield takeLatest(
      actionTypes.MOVE_SUCCESS,
      worker.watchMoveSuccess,
    );
    yield takeLatest(
      actionTypes.EAT_FOOD,
      worker.watchEatFood,
    );
  }