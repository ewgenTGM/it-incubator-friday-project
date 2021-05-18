import {AppActionsType, AppThunk} from './store';
import {APP_ACTION_TYPE} from './app-reducer';
import {cardsApi, CardType} from '../utils/cardsApi';

export enum CARDS_ACTION_TYPE {
  SET_ERROR = 'CARDS/SET_ERROR',
  SET_LOADING = 'CARDS/SET_LOADING',
  SET_PAGE = 'CARDS/SET_PAGE',
  SET_PAGE_COUNT = 'CARDS/SET_PAGE_COUNT',
  SET_CARDS = 'CARDS/SET_CARDS',
  SET_CARDS_TOTAL_COUNT = 'CARDS/SET_CARDS_TOTAL_COUNT'
}

export type CardsStateType = {
  error: null | string
  loading: boolean
  cards: Array<CardType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

const initialState: CardsStateType = {
  error: null,
  loading: false,
  cards: [],
  cardPacksTotalCount: 0,
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

const setCards = (cards: Array<CardType>) => {
  return {
    type: CARDS_ACTION_TYPE.SET_CARDS as const, payload: {cards}
  };
};

export const setPage = (page: number) => {
  return {
    type: CARDS_ACTION_TYPE.SET_PAGE as const, payload: {page}
  };
};

const setCardsTotalCount = (cardsTotalCount: number) => {
  return {
    type: CARDS_ACTION_TYPE.SET_CARDS_TOTAL_COUNT as const, payload: {cardsTotalCount}
  };
};

export const setPageCount = (pageCount: number) => {
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

export const setCardsTC = (pageCount: number, page: number, cardsPack_id?: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCards([]));

  try {
    const response = await cardsApi.getCards({pageCount, page, cardsPack_id});
    dispatch(setCards(response.data.cards));
    dispatch(setCardsTotalCount(response.data.cardsTotalCount));

  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

// export const deleteCardPackTC = (cardPackId: string): AppThunk => async dispatch => {
//   dispatch(setLoadingAC(true));
//   dispatch(setErrorAC(null));
//   try {
//     await cardPacksApi.deleteCardPack(cardPackId);
//     dispatch(setPageCount(initialState.pageCount));
//     dispatch(setPage(initialState.page));
//   } catch (e) {
//     dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
//   } finally {
//     dispatch(setLoadingAC(false));
//   }
// };
//
// export const addCardPackTC = (cardPack: Partial<AddCardPackRequestType>): AppThunk => async dispatch => {
//   dispatch(setLoadingAC(true));
//   dispatch(setErrorAC(null));
//   try {
//     await cardPacksApi.addCardPack(cardPack);
//     dispatch(setPageCount(initialState.pageCount));
//     dispatch(setPage(initialState.page));
//   } catch (e) {
//     dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
//   } finally {
//     dispatch(setLoadingAC(false));
//   }
// };

export type CardsReducerActionsType =
  ReturnType<typeof setErrorAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setCards>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setPageCount>
  | ReturnType<typeof setCardsTotalCount>
