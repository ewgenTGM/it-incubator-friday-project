import {Dispatch} from 'redux';
import {api} from '../utils/api';
import {setAuthDataAC, setIsAuthAC} from './app-reducer';

enum LOGIN_ACTION_TYPE {
  SET_ERROR = 'LOGIN/SET_ERROR',
  SET_LOADING = 'APP/SET_LOADING'
}

// Action creators

const setErrorAC = (error: null | string) => {
  return {type: LOGIN_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: LOGIN_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

//----------------

// Thunk creators

export const loginTC = (email: string, password: string, remember: boolean) => async (dispatch: Dispatch<any>) => {
  dispatch(setErrorAC(null));
  dispatch(setLoadingAC(true));
  try {
    const res = await api.login(email, password, remember);
    dispatch(setAuthDataAC(res));
    dispatch(setIsAuthAC(true));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const logoutTC = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await api.logout();
    dispatch(setAuthDataAC({}));
    dispatch(setIsAuthAC(false));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export type LoginReducerActionsType = ReturnType<typeof setErrorAC> | ReturnType<typeof setLoadingAC>;

export type LoginStateType = typeof initialState;

const initialState = {
  error: null as null | string,
  loading: false
};

//---------------

export const loginReducer = (state: LoginStateType = initialState, action: LoginReducerActionsType): LoginStateType => {
  switch (action.type) {
    case LOGIN_ACTION_TYPE.SET_ERROR: {
      return {
        ...state, error: action.payload.error
      };
    }
    case LOGIN_ACTION_TYPE.SET_LOADING: {
      return {
        ...state, loading: action.payload.loading
      };
    }
    default:
      return state;
  }
};