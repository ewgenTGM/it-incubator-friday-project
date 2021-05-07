import {combineReducers, applyMiddleware} from 'redux';
import {testReducer} from './test-reducer';
import {profileReducer} from './profile-reducer';
import {registrationReducer, RegistrationReducerActionsType} from './registration-reducer';
import {loginReducer, LoginReducerActionsType} from './login-reducer';
import {createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {appReducer, AppReducerActionsType} from './app-reducer';
import {passChangeReducer, PassChangeReducerActionsType} from './passChange-reducer';

const rootReducer = combineReducers({
  test: testReducer,
  profile: profileReducer,
  registration: registrationReducer,
  login: loginReducer,
  appStatus: appReducer,
  passChange: passChangeReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Все экшены нашего приложения, которые можно диспатчить

type AppActionsType =
  AppReducerActionsType
  | LoginReducerActionsType
  | PassChangeReducerActionsType
  | RegistrationReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppStateType,
  unknown,
  AppActionsType>

//@ts-ignore
window.store = store;