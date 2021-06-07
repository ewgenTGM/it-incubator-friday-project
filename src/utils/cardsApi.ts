import axios from 'axios';
import {API} from './constants';

const instance = axios.create({baseURL: API, withCredentials: true});

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
  editCard(_id: string, question?: string, answer?: string) {
    return instance.put('/cards/card', {card: {_id, question, answer}});
  },
  gradeCard(grade: CardGradeRequestType) {
    return instance.put<CardGradeResponseType>('/cards/grade', grade);
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
  question: string
  cardsPack_id: string
  grade: number
  rating: number
  shots: number
  type: 'cards' | 'folder'
  user_id: string
  created: string
  updated: string
  __v: number
  _id: string
}
export type AddCardRequestType = {
  cardsPack_id: string
  question: string
  answer: string
  grade: number
  shots: number
  rating: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  type: string
}

export type GetCardsRequestType = {
  cardAnswer: string
  cardQuestion: string
  cardsPack_id: string
  min: number
  max: number
  sortCards: string
  page: number
  pageCount: number
}

export type CardGradeRequestType = {
  grade: number
  card_id: string
}

type CardGradeResponseType = {
  updatedGrade: {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
  }
}