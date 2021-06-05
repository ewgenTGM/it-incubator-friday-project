import {combineReducers, applyMiddleware} from 'redux';
import {testReducer} from './test-reducer';
import {profileReducer} from './profile-reducer';
import {registrationReducer, RegistrationReducerActionsType} from './registration-reducer';
import {loginReducer, LoginReducerActionsType} from './login-reducer';
import {createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {appReducer, AppReducerActionsType} from './app-reducer';
import {passChangeReducer, PassChangeReducerActionsType} from './pass-change-reducer';
import {passRecoveryReducer, PassRecoveryReducerActionsType} from './pass-recovery-reducer';
import {cardPacksReducer, CardPacksReducerActionsType} from './card-packs-reducer';
import {cardsReducer, CardsReducerActionsType} from './cards-reducer';
import {trainingReducer, TrainingReducerActionsType} from './training-reducer';

const rootReducer = combineReducers({
  test: testReducer,
  profile: profileReducer,
  registration: registrationReducer,
  login: loginReducer,
  appStatus: appReducer,
  passChange: passChangeReducer,
  passRecovery: passRecoveryReducer,
  cardPacks: cardPacksReducer,
  cards: cardsReducer,
  train: trainingReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Все экшены нашего приложения, которые можно диспатчить

export type AppActionsType =
  AppReducerActionsType
  | LoginReducerActionsType
  | PassChangeReducerActionsType
  | RegistrationReducerActionsType
  | PassRecoveryReducerActionsType
  | CardPacksReducerActionsType
  | CardsReducerActionsType
  | TrainingReducerActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppStateType,
  unknown,
  AppActionsType>

//@ts-ignore
window.store = store;