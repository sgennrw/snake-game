import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('snakeService actions', () => {
    it('should create an action to move request', () => {
        const key = 'key';
        const expectedResult = {
            type: actionTypes.MOVE_REQUEST,
            key,
        };
        expect(actions.moveRequest(key)).toEqual(expectedResult);
    });

    it('should create an action to move success', () => {
        const key = 'key';
        const snakePos = [];
        const expectedResult = {
            type: actionTypes.MOVE_SUCCESS,
            key,
            snakePos,
        };
        expect(actions.moveSuccess(key, snakePos)).toEqual(expectedResult);
    });

    it('should create an action to move failure', () => {
        const expectedResult = {
            type: actionTypes.MOVE_FAILURE,
        };
        expect(actions.moveFailure()).toEqual(expectedResult);
    });

    it('should create an action to eat food', () => {
        const snakeTailPos = {};
        const expectedResult = {
            type: actionTypes.EAT_FOOD,
            snakeTailPos,
        };
        expect(actions.eatFood(snakeTailPos)).toEqual(expectedResult);
    });

    it('should create an action to grow up', () => {
        const snakePos = [];
        const expectedResult = {
            type: actionTypes.GROW_UP,
            snakePos,
        };
        expect(actions.growUp(snakePos)).toEqual(expectedResult);
    });

    it('should create an action to update score', () => {
        const expectedResult = {
            type: actionTypes.UPDATE_SCORE,
        };
        expect(actions.updateScore()).toEqual(expectedResult);
    });

    it('should create an action to die', () => {
        const expectedResult = {
            type: actionTypes.DIE,
        };
        expect(actions.die()).toEqual(expectedResult);
    });

    it('should create an action to reset', () => {
        const expectedResult = {
            type: actionTypes.RESET,
        };
        expect(actions.reset()).toEqual(expectedResult);
    });
});