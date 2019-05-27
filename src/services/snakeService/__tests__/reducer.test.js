import reducer from '../reducer';
import * as actionTypes from '../actionTypes';

global.Math.random = () => 0.1;

const initialState = {
    key: '',
    snakePos: [
        {x: jest.fn(), y: jest.fn()}
    ],
    foodPos: {x: jest.fn(), y: jest.fn()},
    currentScore: 0,
    highestScore: 0,
    isGameOver: false,
};

describe('snakeService reducer', () => {
    it('should return initialState', () => {
        const expectedResult = initialState;
        expect(reducer(initialState, {})).toEqual(expectedResult);
    });

    it('should handle MOVE_SUCCESS', () => {
        const action = {
            type: actionTypes.MOVE_SUCCESS,
            key: 'key',
            snakePos: [
                {x: 1, y: 1}
            ],
        };

        const expectedResult = {
            ...initialState,
            key: 'key',
            snakePos: [
                {x: 1, y: 1}
            ],
        };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle EAT_FOOD', () => {
        const action = {
            type: actionTypes.EAT_FOOD,
            snakeTailPos: {},
        };

        const expectedResult = {
            ...initialState,
            foodPos: {x: 40, y: 40},
        };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle GROW_UP', () => {
        const action = {
            type: actionTypes.GROW_UP,
            snakePos: [
                {x: 1, y: 1},
                {x: 2, y: 1},
            ],
        };

        const expectedResult = {
            ...initialState,
            snakePos: [
                {x: 1, y: 1},
                {x: 2, y: 1},
            ],
        };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle UPDATE_SCORE', () => {
        const action = {
            type: actionTypes.UPDATE_SCORE,
        };

        const expectedResult = {
            ...initialState,
            currentScore: 1,
        };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle DIE', () => {
        const action = {
            type: actionTypes.DIE,
        };

        const expectedResult = {
            ...initialState,
            isGameOver: true,
            highestScore: 1,
        };
 
        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    it('should handle RESET', () => {
        const action = {
            type: actionTypes.RESET,
        };

        const expectedResult = {
            ...initialState,
            key: '',
            snakePos: [
                {x: 40, y: 40}
            ],
            foodPos: {x: 40, y: 40},
            currentScore: 0,
            isGameOver: false,
        };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

});