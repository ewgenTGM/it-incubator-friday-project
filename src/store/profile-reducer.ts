import {APP_ACTION_TYPE} from './app-reducer';

type StateType = typeof initialState;

const initialState = {};

export const profileReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case APP_ACTION_TYPE.CLEAR_STORE: {
            return initialState;
        }
        default:
            return state;
    }
};