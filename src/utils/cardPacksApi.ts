import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({baseURL: LOCAL_URL, withCredentials: true});

export const cardPacksApi = {
  getCardPacks(pageCount: number = 10, page: number = 0, userId?: string, packName?: string) {
    return instance.get<CardPacksResponseType>(`/cards/pack?pageCount=${pageCount}&page=${page}${userId ? `&user_id=${userId}` : ''}${packName ? `&packName=${packName}` : ''}`);
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