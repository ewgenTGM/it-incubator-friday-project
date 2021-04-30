import React from 'react';

type StateType = typeof initialState;

const initialState = {
    test: 'test'
};

export const testReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};