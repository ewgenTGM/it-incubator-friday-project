import {AppActionsType} from './store';
import {APP_ACTION_TYPE} from './app-reducer';

type StateType = typeof initialState;

const initialState = {
  test: 'test'
};

export const testReducer = (state: StateType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case APP_ACTION_TYPE.CLEAR_STORE: {
      return initialState;
    }
    default:
      return state;
  }
};