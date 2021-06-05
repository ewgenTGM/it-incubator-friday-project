import {AppActionsType, AppThunk} from './store';
import {APP_ACTION_TYPE} from './app-reducer';
import {AddCardRequestType, cardsApi, CardType} from '../utils/cardsApi';

export enum CARDS_ACTION_TYPE {
  SET_ERROR = 'CARDS/SET_ERROR',
  SET_LOADING = 'CARDS/SET_LOADING',
  SET_PAGE = 'CARDS/SET_PAGE',
  SET_PAGE_COUNT = 'CARDS/SET_PAGE_COUNT',
  SET_CARDS = 'CARDS/SET_CARDS',
  SET_CARDS_TOTAL_COUNT = 'CARDS/SET_CARDS_TOTAL_COUNT',
  SET_PACK_OWNER = 'CARDS/SET_PACK_OWNER'
}

export type CardsStateType = {
  packOwner: string
  cardsPackId: string
  error: null | string
  loading: boolean
  cards: Array<CardType>
  cardsTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

const initialState: CardsStateType = {
  packOwner: '',
  cardsPackId: '',
  error: null,
  loading: false,
  cards: [],
  cardsTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  pageCount: 10,
  page: 1
};

export const cardsReducer = (state = initialState, action: AppActionsType): CardsStateType => {
  switch (action.type) {
    case CARDS_ACTION_TYPE.SET_ERROR:
    case CARDS_ACTION_TYPE.SET_LOADING:
    case CARDS_ACTION_TYPE.SET_CARDS:
    case CARDS_ACTION_TYPE.SET_CARDS_TOTAL_COUNT:
    case CARDS_ACTION_TYPE.SET_PAGE:
    case CARDS_ACTION_TYPE.SET_PAGE_COUNT:
    case CARDS_ACTION_TYPE.SET_PACK_OWNER:
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

const setCardsAC = (cards: Array<CardType>, cardsPackId: string) => {
  return {
    type: CARDS_ACTION_TYPE.SET_CARDS as const, payload: {cards, cardsPackId}
  };
};

const setPackOwnerAC = (packOwner: string) => {
  return {
    type: CARDS_ACTION_TYPE.SET_PACK_OWNER as const, payload: {packOwner}
  };
};

export const setPageAC = (page: number) => {
  return {
    type: CARDS_ACTION_TYPE.SET_PAGE as const, payload: {page}
  };
};

const setCardsTotalCountAC = (cardsTotalCount: number) => {
  return {
    type: CARDS_ACTION_TYPE.SET_CARDS_TOTAL_COUNT as const, payload: {cardsTotalCount}
  };
};

export const setPageCountAC = (pageCount: number) => {
  return {
    type: CARDS_ACTION_TYPE.SET_PAGE_COUNT as const, payload: {pageCount}
  };
};

const setErrorAC = (error: null | string) => {
  return {type: CARDS_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: CARDS_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const setCardsTC = (pageCount: number, page: number, cardsPack_id: string): AppThunk => async dispatch => {

  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCardsAC([], cardsPack_id));

  try {
    const response = await cardsApi.getCards({pageCount, page, cardsPack_id});
    dispatch(setCardsAC(response.data.cards, cardsPack_id));
    dispatch(setCardsTotalCountAC(response.data.cardsTotalCount));

  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const deleteCardTC = (cardId: string, cardsPackId: string): AppThunk => async (dispatch, getState) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardsApi.deleteCard(cardId);
    const {pageCount, page} = getState().cards;
    dispatch(setCardsTC(pageCount, page, cardsPackId));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const addCardTC = (card: Partial<AddCardRequestType>): AppThunk => async (dispatch, getState) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardsApi.addCard(card);
    const {pageCount, page} = getState().cards;
    dispatch(setCardsTC(pageCount, page, getState().cards.cardsPackId));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const updateCardTC = (_id: string, question?: string, answer?: string): AppThunk => async (dispatch, getState) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardsApi.editCard(_id, question, answer);
    const {pageCount, page} = getState().cards;
    dispatch(setCardsTC(pageCount, page, getState().cards.cardsPackId));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export type CardsReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setCardsAC>
  | ReturnType<typeof setPageAC>
  | ReturnType<typeof setPageCountAC>
  | ReturnType<typeof setCardsTotalCountAC>
  | ReturnType<typeof setPackOwnerAC>
