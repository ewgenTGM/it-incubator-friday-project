import {AppActionsType, AppThunk} from './store';
import {CardPackType, cardPacksApi} from '../utils/cardPacksApi';
import {APP_ACTION_TYPE} from './app-reducer';

export enum CARD_PACKS_ACTION_TYPE {
  SET_ERROR = 'CARD_PACKS/SET_ERROR',
  SET_LOADING = 'CARD_PACKS/SET_LOADING',
  SET_PAGE = 'CARD_PACKS/SET_PAGE',
  SET_PAGE_COUNT = 'CARD_PACKS/SET_PAGE_COUNT',
  SET_CARD_PACKS = 'CARD_PACKS/SET_CARD_PACKS',
  SET_CARD_PACKS_TOTAL_COUNT = 'CARD_PACKS/SET_CARD_PACKS_TOTAL_COUNT',
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
  pageCount: 10,
  page: 1
};

export const cardPacksReducer = (state = initialState, action: AppActionsType): CardPacksStateType => {
  switch (action.type) {
    case CARD_PACKS_ACTION_TYPE.SET_ERROR:
    case CARD_PACKS_ACTION_TYPE.SET_LOADING:
    case CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS:
    case CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS_TOTAL_COUNT:
    case CARD_PACKS_ACTION_TYPE.SET_PAGE:
    case CARD_PACKS_ACTION_TYPE.SET_PAGE_COUNT:
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

const setCardPacks = (cardPacks: Array<CardPackType>) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS as const, payload: {cardPacks}
  };
};

export const setPage = (page: number) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_PAGE as const, payload: {page}
  };
};

const setCardPacksTotalCount = (cardPacksTotalCount: number) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS_TOTAL_COUNT as const, payload: {cardPacksTotalCount}
  };
};

export const setPageCount = (pageCount: number) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_PAGE_COUNT as const, payload: {pageCount}
  };
};

const setErrorAC = (error: null | string) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const setCardPacksTC = (pageCount: number, page: number, user_id?: string, packName?: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCardPacks([]));

  try {
    const response = await cardPacksApi.getCardPacks(pageCount, page, user_id, packName);
    dispatch(setCardPacks(response.data.cardPacks));
    dispatch(setCardPacksTotalCount(response.data.cardPacksTotalCount));

  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const deleteCardPackTC = (cardPackId: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardPacksApi.deleteCardPack(cardPackId);
    // dispatch(setPageCount(initialState.pageCount));
    // dispatch(setPage(initialState.page));
    dispatch(setCardPacksTC(initialState.pageCount, initialState.page));
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
  | ReturnType<typeof setPage>
  | ReturnType<typeof setPageCount>
  | ReturnType<typeof setCardPacksTotalCount>