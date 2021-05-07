import {Dispatch} from "react";
import {api} from "../utils/api";
import {AppThunk} from './store';

enum REGISTRATION_ACTION_TYPE {
    SET_ERROR = 'REGISTRATION/SET_ERROR',
    SET_LOADING = 'REGISTRATION/SET_LOADING',
    SET_IS_REGISTER_SUCCESS = 'REGISTRATION/SET_IS_REGISTER_SUCCESS'
}

export type InitialStateType = {
    error: null | string
    loading: boolean
    isRegisterSuccess: boolean
}

const initialState: InitialStateType = {
    error: null,
    loading: false,
    isRegisterSuccess: false
};

export const registrationReducer = (state = initialState, action: RegistrationReducerActionsType): InitialStateType => {
    switch (action.type) {
        case REGISTRATION_ACTION_TYPE.SET_ERROR:
        case REGISTRATION_ACTION_TYPE.SET_LOADING:
        case REGISTRATION_ACTION_TYPE.SET_IS_REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};




// Action creators

const setErrorAC = (error: null | string) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};
const setIsRegisterSuccessAC = (isRegisterSuccess: boolean) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_IS_REGISTER_SUCCESS as const, payload: {isRegisterSuccess}};
};

const setLoadingAC = (loading: boolean) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const registerTC = (email: string, password: string): AppThunk => async dispatch => {
    dispatch(setLoadingAC(true))
    dispatch(setErrorAC(null))
    try {
        const register = await api.register(email, password)
        dispatch(setIsRegisterSuccessAC(true))
    } catch (e) {
        dispatch(setErrorAC(e.response ? e.response.data.error : e.message))
        dispatch(setIsRegisterSuccessAC(false))
    } finally {
        dispatch(setLoadingAC(false))
    }

}

export type RegistrationReducerActionsType =
    ReturnType<typeof setErrorAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setIsRegisterSuccessAC>