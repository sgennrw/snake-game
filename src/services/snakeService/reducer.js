import * as actionTypes from './actionTypes';

const initialState = {
    key: '',
};

const snakeServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DIRECTION_SUCCESS:
            return {
                ...state,
                key: action.key,
            }
        default:
            return state
    };
};

export default snakeServiceReducer;