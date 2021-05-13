import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({baseURL: LOCAL_URL, withCredentials: true});

export const cardPacksApi = {
  getCardPacks(pageCount: number = 10, page: number = 0, userId?: string) {
    return instance.get<CardPacksResponseType>(`/cards/pack?pageCount=${pageCount}&page=${page}${userId ? `&user_id=${userId}` : ''}`);
  }
,
  deleteCardPack(cardPackId: string) {
    return instance.delete('/cards/pack?id=' + cardPackId);
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