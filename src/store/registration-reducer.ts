import {Dispatch} from "react";
import {api} from "../utils/api";

type StateType = typeof initialState;

const initialState = {};

export const registrationReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
        const register = await api.register(email, password)
        alert('Регитсрация прошла успешно')
    }
    catch (e) {
        alert(e.response.data.error)
    }

}