import { takeLatest } from 'redux-saga/effects';
import * as snakeActionTypes from './services/snakeService/actionTypes';
import * as snakeWorkers from './services/snakeService/workers';

export default function* rootSaga() {
  yield takeLatest(
    snakeActionTypes.CHANGE_DIRECTION_REQUEST,
    snakeWorkers.watchChangeDirectionRequest,
  );
}