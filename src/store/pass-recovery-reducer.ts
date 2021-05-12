import {AppActionsType, AppThunk} from './store';
import {authApi} from '../utils/authApi';
import {APP_ACTION_TYPE} from './app-reducer';

export enum PASS_RECOVERY_ACTION_TYPE {
  SET_ERROR = 'PASS_RECOVERY/SET_ERROR',
  SET_LOADING = 'PASS_RECOVERY/SET_LOADING',
  SET_IS_EMAIL_SEND = 'PASS_RECOVERY/SET_IS_EMAIL_SEND'
}

export type PassRecoveryStateType = {
  error: null | string
  loading: boolean
  isEmailSend: boolean
}

const initialState: PassRecoveryStateType = {
  error: null,
  loading: false,
  isEmailSend: false
};

export const passRecoveryReducer = (state = initialState, action: AppActionsType): PassRecoveryStateType => {
  switch (action.type) {
    case PASS_RECOVERY_ACTION_TYPE.SET_ERROR:
    case PASS_RECOVERY_ACTION_TYPE.SET_LOADING:
    case PASS_RECOVERY_ACTION_TYPE.SET_IS_EMAIL_SEND:
      return {
        ...state,
        ...action.payload
      };
    case APP_ACTION_TYPE.CLEAR_STORE: {
      return initialState;
    }
    default:
      return state;
  }
};


const setErrorAC = (error: null | string) => {
  return {type: PASS_RECOVERY_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};
const setIsEmailSend = (isEmailSend: boolean) => {
  return {type: PASS_RECOVERY_ACTION_TYPE.SET_IS_EMAIL_SEND as const, payload: {isEmailSend}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: PASS_RECOVERY_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const passRecoveryTC = (email: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    const changePassResponse = await authApi.passRecovery(email);
    dispatch(setIsEmailSend(true));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }

};

export type PassRecoveryReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setIsEmailSend>