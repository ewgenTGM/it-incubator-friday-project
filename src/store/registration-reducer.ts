import React from 'react';

type StateType = typeof initialState;

const initialState = {};

export const registrationReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};