import {api, LoginResponseType} from '../utils/api';
import {AppThunk} from './store';

enum ACTION_TYPE {
  SET_IS_INITIALIZED = 'APP/SET_IS_INITIALIZED',
  SET_IS_AUTH = 'APP/SET_IS_AUTH',
  SET_AUTH_DATA = 'APP/SET_AUTH_DATA',
  SET_ERROR = 'APP/SET_ERROR'
}

// Action creators
export const setIsInitializedAC = (isInitialized: boolean) => {
  return {type: ACTION_TYPE.SET_IS_INITIALIZED as const, payload: {isInitialized}};
};

export const setIsAuthAC = (isAuth: boolean) => {
  return {
    type: ACTION_TYPE.SET_IS_AUTH as const, payload: {isAuth}
  };
};

export const setError = (error: string | null) => {
  return {type: ACTION_TYPE.SET_ERROR as const, payload: {error}};
};
export const setAuthDataAC = (authData: LoginResponseType | {}) => {
  return {type: ACTION_TYPE.SET_AUTH_DATA as const, payload: {authData}};
};
// ------------------

// Thunk creators
export const AppInitializeTC = (): AppThunk => async dispatch => {
  try {
    const response = await api.me();
    dispatch(setAuthDataAC(response));
    dispatch(setIsAuthAC(true));
  } catch (e) {
    dispatch(setError(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setIsInitializedAC(true));
  }
};
// ------------------

export type AppReducerActionsType =
  ReturnType<typeof setIsInitializedAC>
  | ReturnType<typeof setIsAuthAC>
  | ReturnType<typeof setError>
  | ReturnType<typeof setAuthDataAC>

type StateType = typeof initialState;

const initialState = {
  isInitialized: false,
  isAuth: false,
  authData: {} as {} | LoginResponseType,
  error: null as string | null
};

export const appReducer = (state: StateType = initialState, action: AppReducerActionsType): StateType => {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_INITIALIZED:
    case ACTION_TYPE.SET_IS_AUTH:
    case ACTION_TYPE.SET_AUTH_DATA:
      return {...state, ...action.payload};

    default:
      return state;
  }
};