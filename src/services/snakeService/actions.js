import * as actionTypes from './actionTypes';

export const changeDirectionRequest = key => {
    return {
        type: actionTypes.CHANGE_DIRECTION_REQUEST,
        key,
    }
};

export const changeDirectionSuccess = (key, snakePos) => {
    return {
        type: actionTypes.CHANGE_DIRECTION_SUCCESS,
        key,
        snakePos,
    }
};

export const changeDirectionFailure = () => {
    return {
        type: actionTypes.CHANGE_DIRECTION_FAILURE,
    }
}

export const eatFood = () => {
    return {
        type: actionTypes.EAT_FOOD,
    }
}
