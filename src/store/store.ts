import {combineReducers, applyMiddleware} from 'redux';
import {testReducer} from './test-reducer';
import {profileReducer} from './profile-reducer';
import {registrationReducer} from './registration-reducer';
import {loginReducer} from './login-reducer';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './app-reducer';

const rootReducer = combineReducers({
  test: testReducer,
  profile: profileReducer,
  registration: registrationReducer,
  login: loginReducer,
  appStatus: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;