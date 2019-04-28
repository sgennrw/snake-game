import { put } from 'redux-saga/effects';
import * as actions from './actions';

export function* watchChangeDirectionRequest(action) {
    yield put(actions.changeDirectionSuccess(action.key));
};
   