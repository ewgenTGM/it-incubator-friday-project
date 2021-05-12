import {AppActionsType, AppThunk} from './store';
import {CardPackType, cardsApi} from '../utils/cardsApi';
import {APP_ACTION_TYPE} from './app-reducer';

export enum CARD_PACKS_ACTION_TYPE {
  SET_ERROR = 'CARD_PACKS/SET_ERROR',
  SET_LOADING = 'CARD_PACKS/SET_LOADING',
  SET_CARD_PACKS = 'CARD_PACKS/SET_CARD_PACKS',
}

export type CardPacksStateType = {
  error: null | string
  loading: boolean
  cardPacks: Array<CardPackType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

const initialState: CardPacksStateType = {
  error: null,
  loading: false,
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  pageCount: 0,
  page: 0
};

export const cardPacksReducer = (state = initialState, action: AppActionsType): CardPacksStateType => {
  switch (action.type) {
    case CARD_PACKS_ACTION_TYPE.SET_ERROR:
    case CARD_PACKS_ACTION_TYPE.SET_LOADING:
    case CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS:
      return {
        ...state,
        ...action.payload
      };
    case APP_ACTION_TYPE.CLEAR_STORE:
      return initialState

    default:
      return state;
  }
};

const setCardPacks = (cardPacks: Array<CardPackType>) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS as const, payload: {cardPacks}
  };
};

const setErrorAC = (error: null | string) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const setCardPacksTC = (pageCount: number = 10): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCardPacks([]));
  try {
    const response = await cardsApi.getCardPacks(pageCount);
    dispatch(setCardPacks(response.data.cardPacks));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

export type CardPacksReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setCardPacks>