type StateType = typeof initialState;

const initialState = {};

export const loginReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};