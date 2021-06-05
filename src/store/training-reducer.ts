import {cardsApi, CardType} from '../utils/cardsApi';
import {APP_ACTION_TYPE} from './app-reducer';
import {AppActionsType, AppThunk} from './store';
import {CardsPackType} from '../utils/cardPacksApi';

export enum TRAINIGN_ACTION_TYPE {
  SET_ERROR = 'TRAIN/SET_ERROR',
  SET_LOADING = 'TRAIN/SET_LOADING',
  SET_CARDS = 'TRAIN/SET_CARDS'
}

export type TrainingStateType = {
  cardsPack: CardsPackType
  error: null | string
  loading: boolean
  cards: Array<CardType>
}

const initialState: TrainingStateType = {
  cardsPack: {} as CardsPackType,
  error: null,
  loading: false,
  cards: []
};

const setCardsAC = (cards: Array<CardType>, cardsPackId: string) => {
  return {
    type: TRAINIGN_ACTION_TYPE.SET_CARDS as const, payload: {cards, cardsPackId}
  };
};


const setErrorAC = (error: null | string) => {
  return {type: TRAINIGN_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: TRAINIGN_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const setCardsTC = (cardsPack_id: string): AppThunk => async dispatch => {

  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCardsAC([], cardsPack_id));

  try {
    const response = await cardsApi.getCards({cardsPack_id, page: 1, pageCount: 1000});
    dispatch(setCardsAC(response.data.cards, cardsPack_id));

  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const trainingReducer = (state: TrainingStateType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case TRAINIGN_ACTION_TYPE.SET_ERROR:
    case TRAINIGN_ACTION_TYPE.SET_LOADING:
    case TRAINIGN_ACTION_TYPE.SET_CARDS:
      return {
        ...state,
        ...action.payload
      };

    case APP_ACTION_TYPE.CLEAR_STORE:
      return initialState;

    default:
      return state;
  }
};

export type TrainingReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setCardsAC>