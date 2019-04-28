import * as actionTypes from './actionTypes';

export const changeDirectionRequest = key => {
    return {
        type: actionTypes.CHANGE_DIRECTION_REQUEST,
        key
    }
};

export const changeDirectionSuccess = key => {
    return {
        type: actionTypes.CHANGE_DIRECTION_SUCCESS,
        key
    }
};