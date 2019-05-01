import * as actionTypes from './actionTypes';

import { randomLocation } from '../../utils.js';

const initialState = {
    key: '',
    snakePos: [
        {x: randomLocation(), y: randomLocation()}
    ],
    foodPos: {x: randomLocation(), y: randomLocation()},
    isGameOver: false,
};

const snakeServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MOVE_SUCCESS:
            return {
                ...state,
                key: action.key,
                snakePos: action.snakePos,
            }
        case actionTypes.EAT_FOOD:
            return {
                ...state,
                foodPos: {x: randomLocation(), y: randomLocation()},
            }
        case actionTypes.GROW_UP:
            return {
                ...state,
                snakePos: action.snakePos,
            }
        case actionTypes.DIE:
            return {
                ...state,
                isGameOver: true,
            }
        default:
            return state
    };
};

export default snakeServiceReducer;