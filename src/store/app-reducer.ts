import {Dispatch} from 'redux';
import {api, LoginResponseType} from '../utils/api';

enum ACTION_TYPE {
  SET_IS_INITIALIZED = 'SET_IS_INITIALIZED',
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  SET_ERROR = 'SET_ERROR'
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
export const setAuthData = (authData: LoginResponseType) => {
  return {type: ACTION_TYPE.SET_AUTH_DATA as const, payload: {authData}};
};
// ------------------

// Thunk creators
export const AppInitializeTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await api.me();
    dispatch(setAuthData(response));
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
  | ReturnType<typeof setAuthData>

type StateType = typeof initialState;
const initialState = {
  isInitialized: false,
  isAuth: false,
  authData: {},
  error: null as string | null
};

export const appReducer = (state: StateType = initialState, action: AppReducerActionsType): StateType => {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_INITIALIZED: {
      return {...state, isInitialized: action.payload.isInitialized};
    }
    case ACTION_TYPE.SET_IS_AUTH: {
      return {...state, isAuth: action.payload.isAuth};
    }
    case ACTION_TYPE.SET_AUTH_DATA: {
      return {...state, authData: action.payload.authData};
    }
    default:
      return state;
  }
};