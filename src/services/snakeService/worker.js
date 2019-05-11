import { put, select, delay } from 'redux-saga/effects';
import * as actions from './actions';

import { WINDOW_SIZE, ITEM_SIZE } from '../../constants';

export function* watchMoveRequest(action) {
    const { key } = action;
    const { snakePos, foodPos, isGameOver } = yield select(state => state.snakeServiceReducer);

    if(!isGameOver) {
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
                return yield put(actions.moveFailure());
        }

        newPos.x = moveAcrossWindowSize(newPos.x);
        newPos.y = moveAcrossWindowSize(newPos.y);

        // not allow snake to move backward
        if(snakePos.length > 1 && newPos.x === snakePos[1].x && newPos.y === snakePos[1].y) {
            return yield put(actions.moveFailure());
        }

        // re position of each snake's point
        let newSnakePos = [newPos];
        let isDeath = false;
        snakePos.forEach((pos, index) => {
            if(newPos.x === pos.x && newPos.y === pos.y) {
                isDeath = true;
                return;
            }
            if(index < snakePos.length-1) {
                newSnakePos.push(pos);
            }
        });

        if(isDeath) {
            yield put(actions.die());
        } else {
            yield put(actions.moveSuccess(key, newSnakePos));

            if(newSnakePos[0].x === foodPos.x && newSnakePos[0].y === foodPos.y) {
                yield put(actions.eatFood(snakePos[snakePos.length-1]));
            }
        }
    } else {
        yield put(actions.moveFailure());
    }
};

export function* watchMoveSuccess(action) {
    yield delay(500);
    yield put(actions.moveRequest(action.key));
}

export function* watchEatFood(action) {
    const { snakePos } = yield select(state => state.snakeServiceReducer);
    snakePos.push(action.snakeTailPos);
    yield put(actions.growUp(snakePos));
    yield put(actions.updateScore());
}

const moveAcrossWindowSize = pos => {
    if(pos < 0 || pos >= WINDOW_SIZE) {
        return pos = WINDOW_SIZE - Math.abs(pos); 
    }
    return pos;
}
