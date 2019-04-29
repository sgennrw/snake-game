import { put, select } from 'redux-saga/effects';
import * as actions from './actions';

import { WINDOW_SIZE, ITEM_SIZE } from '../../constants';

export function* watchChangeDirectionRequest(action) {
    const { key } = action;
    const { snakePos, foodPos } = yield select(state => state.snakeServiceReducer);
    
    let newPos;
    switch(key) {
        case 'ArrowUp':
            newPos = {x: snakePos[0].x, y: snakePos[0].y - ITEM_SIZE};
            break; 
        case 'ArrowRight':
            newPos = {x: snakePos[0].x + ITEM_SIZE, y: snakePos[0].y};
            break; 
        case 'ArrowDown':
            newPos = {x: snakePos[0].x, y: snakePos[0].y + ITEM_SIZE};
            break; 
        case 'ArrowLeft':
            newPos = {x: snakePos[0].x - ITEM_SIZE, y: snakePos[0].y}
            break; 
        default:
            return yield put(actions.changeDirectionFailure());
    }

    newPos.x = moveAcrossWindowSize(newPos.x);
    newPos.y = moveAcrossWindowSize(newPos.y);

    const newSnakePos = [newPos];
    yield put(actions.changeDirectionSuccess(action.key, newSnakePos));

    if(newSnakePos[0].x === foodPos.x && newSnakePos[0].y === foodPos.y) {
        yield put(actions.eatFood());
    }
};

const moveAcrossWindowSize = pos => {
    if(pos < 0 || pos > WINDOW_SIZE - ITEM_SIZE) {
        return pos = WINDOW_SIZE - Math.abs(pos); 
    }
    return pos;
}
   