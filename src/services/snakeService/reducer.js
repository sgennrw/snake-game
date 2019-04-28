import * as actionTypes from './actionTypes';

import { randomLocation } from '../../utils.js';

const initialState = {
    key: '',
    snakePos: [
        {x: randomLocation(), y: randomLocation()}
    ],
};

const snakeServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DIRECTION_SUCCESS:
            return {
                ...state,
                key: action.key,
                snakePos: action.snakePos,
            }
        default:
            return state
    };
};

export default snakeServiceReducer;