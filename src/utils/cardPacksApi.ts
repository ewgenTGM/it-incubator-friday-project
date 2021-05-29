import axios from 'axios';
import {API} from './constants';


const instance = axios.create({baseURL: API, withCredentials: true});

export const cardPacksApi = {
  getCardsPacks(options: Partial<GetCardsPacksRequestType>) {
    return instance.get<CardsPacksResponseType>('/cards/pack', {params: {...options}});
  },

  deleteCardsPack(cardPackId: string) {
    return instance.delete('/cards/pack?id=' + cardPackId);
  },

  addCardsPack(cardsPack: Partial<AddCardsPackRequestType>) {
    return instance.post('/cards/pack', {cardsPack: cardsPack});
  },

  editCardsPack(_id: string, name?: string) {
    return instance.put('/cards/pack', {cardsPack: {_id, name}});
  }
};

export type CardsPacksResponseType = {
  cardPacks: Array<CardsPackType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type CardsPackType = {
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
export type AddCardsPackRequestType = {
  name: string
  path: string
  grade: number
  shots: number
  rating: number
  deckCover: string
  private: boolean
  type: 'pack' | 'folder'
}

export type GetCardsPacksRequestType = {
  packName: string
  min: number
  max: number
  sortPacks: string
  page: number
  pageCount: number
  user_id: string
}