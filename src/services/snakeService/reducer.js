import * as actionTypes from './actionTypes';

import { randomLocation } from '../../utils.js';

const initialState = {
    key: '',
    snakePos: [
        {x: randomLocation(), y: randomLocation()}
    ],
    foodPos: {x: randomLocation(), y: randomLocation()},
    currentScore: 0,
    highestScore: 0,
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
        case actionTypes.UPDATE_SCORE:
            return {
                ...state,
                ...state.currentScore++,
            }
        case actionTypes.DIE:
            return {
                ...state,
                isGameOver: true,
                highestScore: state.currentScore > state.highestScore ? state.currentScore : state.highestScore,
            }
        case actionTypes.RESET:
            return {
                ...state,
                key: '',
                snakePos: [
                    {x: randomLocation(), y: randomLocation()}
                ],
                foodPos: {x: randomLocation(), y: randomLocation()},
                currentScore: 0,
                isGameOver: false,
            }
        default:
            return state
    };
};

export default snakeServiceReducer;