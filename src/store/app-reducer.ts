import {authApi, LoginResponseType} from '../utils/authApi';
import {AppActionsType, AppThunk} from './store';

export enum APP_ACTION_TYPE {
  SET_IS_INITIALIZED = 'APP/SET_IS_INITIALIZED',
  SET_IS_AUTH = 'APP/SET_IS_AUTH',
  SET_AUTH_DATA = 'APP/SET_AUTH_DATA',
  SET_ERROR = 'APP/SET_ERROR',
  CLEAR_STORE = 'APP/CLEAR_STORE'
}

// Action creators
export const setIsInitializedAC = (isInitialized: boolean) => {
  return {type: APP_ACTION_TYPE.SET_IS_INITIALIZED as const, payload: {isInitialized}};
};

export const setIsAuthAC = (isAuth: boolean) => {
  return {
    type: APP_ACTION_TYPE.SET_IS_AUTH as const, payload: {isAuth}
  };
};

const setError = (error: string | null) => {
  return {type: APP_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

export const clearStoreAC = () => {
  return {type: APP_ACTION_TYPE.CLEAR_STORE as const};
};

export const setAuthDataAC = (authData: LoginResponseType | {}) => {
  return {type: APP_ACTION_TYPE.SET_AUTH_DATA as const, payload: {authData}};
};
// ------------------

// Thunk creators
export const AppInitializeTC = (): AppThunk => async dispatch => {
  try {
    const response = await authApi.me();
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
  | ReturnType<typeof clearStoreAC>

type StateType = typeof initialState;

const initialState = {
  isInitialized: false,
  isAuth: false,
  authData: {} as {} | LoginResponseType,
  error: null as string | null
};

export const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {
  switch (action.type) {
    case APP_ACTION_TYPE.SET_IS_INITIALIZED:
    case APP_ACTION_TYPE.SET_IS_AUTH:
    case APP_ACTION_TYPE.SET_AUTH_DATA:
    case APP_ACTION_TYPE.SET_ERROR:
      return {...state, ...action.payload};
    case APP_ACTION_TYPE.CLEAR_STORE: {
      return initialState;
    }

    default:
      return state;
  }
};