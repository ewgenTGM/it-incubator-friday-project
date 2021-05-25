import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';

const instance = axios.create({baseURL: REMOTE_URL, withCredentials: true});

export const cardsApi = {
  getCards(options: Partial<GetCardsRequestType>) {
    return instance.get<CardsResponseType>('/cards/card', {params: {...options}});
  },
  deleteCard(cardId: string) {
    return instance.delete('/cards/card?id=' + cardId);
  },
  addCard(card: Partial<AddCardRequestType>) {
    return instance.post('/cards/card', {card});
  },
  editCard(_id: string, question?: string) {
    return instance.put('/cards/card', {cardsPack: {_id, question}});
  }
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
export type AddCardRequestType = {
    cardsPack_id:string
    question: string
    answer: string
    grade: number
    shots: number
    rating: number
    answerImg: string
    questionImg:string
    questionVideo: string
    answerVideo: string
    type: string
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