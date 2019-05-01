import * as actionTypes from './actionTypes';

export const moveRequest = key => {
    return {
        type: actionTypes.MOVE_REQUEST,
        key,
    }
};

export const moveSuccess = (key, snakePos) => {
    return {
        type: actionTypes.MOVE_SUCCESS,
        key,
        snakePos,
    }
};

export const moveFailure = () => {
    return {
        type: actionTypes.MOVE_FAILURE,
    }
}

export const eatFood = snakeTailPos => {
    return {
        type: actionTypes.EAT_FOOD,
        snakeTailPos,
    }
}

export const growUp = snakePos => {
    return {
        type: actionTypes.GROW_UP,
        snakePos,
    }
}

export const die = () => {
    return {
        type: actionTypes.DIE,
    }
}