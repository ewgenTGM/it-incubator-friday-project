import {Dispatch} from "react";
import {api} from "../utils/api";

export type PassChangeInitialStateType = {
    error: null | string
    loading: boolean
    isChangedPass: boolean
}

const initialState: PassChangeInitialStateType = {
    error: null,
    loading: false,
    isChangedPass: false
};

export const passChangeReducer = (state = initialState, action: PassChangeReducerActionsType): PassChangeInitialStateType => {
    switch (action.type) {
        case REGISTRATION_ACTION_TYPE.SET_ERROR:
        case REGISTRATION_ACTION_TYPE.SET_LOADING:
        case REGISTRATION_ACTION_TYPE.SET_IS_CHANGED_PASS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};


enum REGISTRATION_ACTION_TYPE {
    SET_ERROR = 'REGISTRATION/SET_ERROR',
    SET_LOADING = 'REGISTRATION/SET_LOADING',
    SET_IS_CHANGED_PASS = 'REGISTRATION/SET_IS_CHANGED_PASS'
}

// Action creators

const setErrorAC = (error: null | string) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};
const setIsChangedPass = (isChangedPass: boolean) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_IS_CHANGED_PASS as const, payload: {isChangedPass}};
};

const setLoadingAC = (loading: boolean) => {
    return {type: REGISTRATION_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const changePassTC = (newPassword: string, token: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoadingAC(true))
    dispatch(setErrorAC(null))
    try {
        const changePassResponse = await api.changePass(newPassword, token)
        dispatch(setIsChangedPass(true))
    } catch (e) {
        dispatch(setErrorAC(e.response ? e.response.data.error : e.message))
    } finally {
        dispatch(setLoadingAC(false))
    }

}

type PassChangeReducerActionsType =
    ReturnType<typeof setErrorAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setIsChangedPass>