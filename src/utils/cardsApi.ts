import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({baseURL: LOCAL_URL, withCredentials: true});

export const cardsApi = {
  getCards(options: Partial<GetCardsRequestType>) {
    return instance.get<CardsResponseType>('/cards/card', {params: {...options}});
  },

  // deleteCardPack(cardPackId: string) {
  //   return instance.delete('/cards/pack?id=' + cardPackId);
  // },
  //
  // addCardPack(cardsPack: Partial<AddCardPackRequestType>) {
  //   return instance.post('/cards/pack', {cardsPack: cardsPack});
  // }
};

export type CardsResponseType = {
  cards: Array<CardType>
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}

export type CardType = {
  answer: string
  question:string
  cardsPack_id: string
  grade:number
  rating:number
  shots: number
  type: "cards" | "folder"
  user_id: string
  created: string
  updated: string
  __v: number
  _id: string
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

export type GetCardsRequestType = {
  cardAnswer:string
  cardQuestion:string
  cardsPack_id:string
  min: number
  max: number
  sortCards:string
  page: number
  pageCount: number
}