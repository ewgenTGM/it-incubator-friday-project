import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({baseURL: REMOTE_URL, withCredentials: true});

export const cardPacksApi = {
  getCardPacks(options: Partial<GetCardPacksRequestType>) {
    return instance.get<CardPacksResponseType>('/cards/pack', {params: {...options}});
  },

  deleteCardPack(cardPackId: string) {
    return instance.delete('/cards/pack?id=' + cardPackId);
  },

  addCardPack(cardsPack: Partial<AddCardPackRequestType>) {
    return instance.post('/cards/pack', {cardsPack: cardsPack});
  }
};

export type CardPacksResponseType = {
  cardPacks: Array<CardPackType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type CardPackType = {
  _id: string
  user_id: string
  user_name: string
  name: string
  path: string
  cardsCount: number
  grade: number
  shots: number
  rating: number
  type: 'pack' | 'folder'
  created: string
  updated: string
  __v: string
}
export type AddCardPackRequestType = {
  name: string
  path: string
  grade: number
  shots: number
  rating: number
  deckCover: string
  private: boolean
  type: 'pack' | 'folder'
}

export type GetCardPacksRequestType = {
  packName: string
  min: number
  max: number
  sortPacks: string
  page: number
  pageCount: number
  user_id: string
}