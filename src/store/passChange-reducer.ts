import {Dispatch} from 'react';
import {api} from '../utils/api';
import {AppThunk} from './store';

enum PASS_CHANGE_ACTION_TYPE {
  SET_ERROR = 'PASS_CHANGE/SET_ERROR',
  SET_LOADING = 'PASS_CHANGE/SET_LOADING',
  SET_IS_CHANGED_PASS = 'PASS_CHANGE/SET_IS_CHANGED_PASS'
}

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
    case PASS_CHANGE_ACTION_TYPE.SET_ERROR:
    case PASS_CHANGE_ACTION_TYPE.SET_LOADING:
    case PASS_CHANGE_ACTION_TYPE.SET_IS_CHANGED_PASS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

// Action creators

const setErrorAC = (error: null | string) => {
  return {type: PASS_CHANGE_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};
const setIsChangedPass = (isChangedPass: boolean) => {
  return {type: PASS_CHANGE_ACTION_TYPE.SET_IS_CHANGED_PASS as const, payload: {isChangedPass}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: PASS_CHANGE_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const changePassTC = (newPassword: string, token: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    const changePassResponse = await api.setNewPassword(newPassword, token);
    dispatch(setIsChangedPass(true));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }

};

export type PassChangeReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setIsChangedPass>