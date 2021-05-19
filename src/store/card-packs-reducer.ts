import {AppActionsType, AppThunk} from './store';
import {CardsPackType, cardPacksApi, AddCardsPackRequestType} from '../utils/cardPacksApi';
import {APP_ACTION_TYPE} from './app-reducer';

export enum CARD_PACKS_ACTION_TYPE {
  SET_ERROR = 'CARD_PACKS/SET_ERROR',
  SET_LOADING = 'CARD_PACKS/SET_LOADING',
  SET_PAGE = 'CARD_PACKS/SET_PAGE',
  SET_PAGE_COUNT = 'CARD_PACKS/SET_PAGE_COUNT',
  SET_CARD_PACKS = 'CARD_PACKS/SET_CARD_PACKS',
  SET_CARD_PACKS_TOTAL_COUNT = 'CARD_PACKS/SET_CARD_PACKS_TOTAL_COUNT',
  SET_ONLY_MY_PACKS = 'CARD_PACKS/SET_ONLY_MY_PACKS'
}

export type CardPacksStateType = {
  error: null | string
  loading: boolean
  cardPacks: Array<CardsPackType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  onlyMyPacks: boolean
}

const initialState: CardPacksStateType = {
  error: null,
  loading: false,
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  pageCount: 10,
  page: 1,
  onlyMyPacks: false
};

export const cardPacksReducer = (state = initialState, action: AppActionsType): CardPacksStateType => {
  switch (action.type) {
    case CARD_PACKS_ACTION_TYPE.SET_ERROR:
    case CARD_PACKS_ACTION_TYPE.SET_LOADING:
    case CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS:
    case CARD_PACKS_ACTION_TYPE.SET_CARD_PACKS_TOTAL_COUNT:
    case CARD_PACKS_ACTION_TYPE.SET_PAGE:
    case CARD_PACKS_ACTION_TYPE.SET_PAGE_COUNT:
    case CARD_PACKS_ACTION_TYPE.SET_ONLY_MY_PACKS:
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

const setCardPacks = (cardPacks: Array<CardsPackType>) => {
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

export const setOnlyMyPacks = (onlyMyPacks: boolean) => {
  return {
    type: CARD_PACKS_ACTION_TYPE.SET_ONLY_MY_PACKS as const, payload: {onlyMyPacks}
  };
};

const setErrorAC = (error: null | string) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_ERROR as const, payload: {error}};
};

const setLoadingAC = (loading: boolean) => {
  return {type: CARD_PACKS_ACTION_TYPE.SET_LOADING as const, payload: {loading}};
};

export const setCardsPacksTC = (pageCount: number, page: number, user_id?: string, packName?: string): AppThunk => async dispatch => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  dispatch(setCardPacks([]));

  try {
    const response = await cardPacksApi.getCardsPacks({pageCount, page, user_id, packName});
    dispatch(setCardPacks(response.data.cardPacks));
    dispatch(setCardPacksTotalCount(response.data.cardPacksTotalCount));

  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));

  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const deleteCardsPackTC = (cardPackId: string): AppThunk => async (dispatch, getState) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardPacksApi.deleteCardsPack(cardPackId);
    const {pageCount, page, onlyMyPacks} = getState().cardPacks;
    const _id = onlyMyPacks ? getState().appStatus.authData._id : undefined;
    dispatch(setCardsPacksTC(pageCount, page, _id));
  } catch (e) {
    dispatch(setErrorAC(e.response ? e.response.data.error : e.message));
  } finally {
    dispatch(setLoadingAC(false));
  }
};

export const addCardsPackTC = (cardPack: Partial<AddCardsPackRequestType>): AppThunk => async (dispatch, getState) => {
  dispatch(setLoadingAC(true));
  dispatch(setErrorAC(null));
  try {
    await cardPacksApi.addCardsPack(cardPack);
    const {pageCount, page, onlyMyPacks} = getState().cardPacks;
    const _id = onlyMyPacks ? getState().appStatus.authData._id : undefined;
    dispatch(setCardsPacksTC(pageCount, page, _id));
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
  | ReturnType<typeof setOnlyMyPacks>
