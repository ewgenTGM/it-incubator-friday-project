import {combineReducers} from 'redux';
import {testReducer} from './test-reducer';
import {profileReducer} from './profile-reducer';
import {registrationReducer} from './registration-reducer';
import {loginReducer} from './login-reducer';
import {createStore} from 'redux';

const rootReducer = combineReducers({
    test: testReducer,
    profile: profileReducer,
    registration: registrationReducer,
    login: loginReducer
});

const store = createStore(rootReducer);