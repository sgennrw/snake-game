import { all } from 'redux-saga/effects';
import watcherSaga from './services/snakeService/index';

export default function* rootSaga() {
  yield all([
    watcherSaga(),
  ]);
}