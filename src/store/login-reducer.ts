import {authApi} from '../utils/authApi';
import {APP_ACTION_TYPE, clearStoreAC, setAuthDataAC, setIsAuthAC} from './app-reducer';
import {AppActionsType, AppThunk} from './store';

enum LOGIN_ACTION_TYPE {
  SET_ERROR = 'LOGIN/SET_ERROR',
  SET_LOADING = 'LOGIN/SET_LOADING',
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

export const loginTC = (email: string, password: string, remember: boolean): AppThunk => async dispatch => {
  dispatch(setErrorAC(null));
  dispatch(setLoadingAC(true));
  try {
    const res = await authApi.login(email, password, remember);
    dispatch(setAuthDataAC(res));
    dispatch(setIsAuthAC(true));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const logoutTC = (): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await authApi.logout();
    dispatch(clearStoreAC());
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export type LoginReducerActionsType = ReturnType<typeof setErrorAC> | ReturnType<typeof setLoadingAC>;

export type LoginStateType = {
  error: null | string
  loading: boolean
};

const initialState: LoginStateType = {
  error: null,
  loading: false
};

//---------------

export const loginReducer = (state: LoginStateType = initialState, action: AppActionsType): LoginStateType => {
  switch (action.type) {
    case LOGIN_ACTION_TYPE.SET_ERROR:
    case LOGIN_ACTION_TYPE.SET_LOADING:
      return {
        ...state, ...action.payload
      };
    case APP_ACTION_TYPE.CLEAR_STORE: {
      return initialState;
    }
    default:
      return state;
  }
};