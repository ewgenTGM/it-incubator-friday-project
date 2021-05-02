type StateType = typeof initialState;

const initialState = {};

export const profileReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};