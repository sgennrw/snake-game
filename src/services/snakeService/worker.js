import { put, select } from 'redux-saga/effects';
import * as actions from './actions';

import { ITEM_SIZE } from '../../constants';

export function* watchChangeDirectionRequest(action) {
    const { key } = action;
    const { snakePos } = yield select(state => state.snakeServiceReducer);
    
    let newSnakePos = [];
    switch(key) {
        case 'ArrowUp':
            newSnakePos.push({x: snakePos[0].x, y: snakePos[0].y - ITEM_SIZE});
            break; 
        case 'ArrowRight':
            newSnakePos.push({x: snakePos[0].x + ITEM_SIZE, y: snakePos[0].y});
            break; 
        case 'ArrowDown':
            newSnakePos.push({x: snakePos[0].x, y: snakePos[0].y + ITEM_SIZE});
            break; 
        case 'ArrowLeft':
            newSnakePos.push({x: snakePos[0].x - ITEM_SIZE, y: snakePos[0].y});
            break; 
        default:
            return yield put(actions.changeDirectionFailure());
    }
    yield put(actions.changeDirectionSuccess(action.key, newSnakePos));
};
   