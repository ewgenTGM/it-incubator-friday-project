import React from 'react';
import {CardType} from '../../utils/cardsApi';
import {Card} from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCardTC, updateCardTC} from '../../store/cards-reducer';
import {Col} from 'antd';
import {AppStateType} from '../../store/store';

type PropsType = {
  cards: Array<CardType>
};

export const Cards: React.FC<PropsType> = props => {

  const dispatch = useDispatch();
  const userId = useSelector<AppStateType, string | undefined>(state => state.appStatus.authData._id);
  const {cards} = props;
  const deleteCard = (cardId: string, cardsPackId: string) => {
    dispatch(deleteCardTC(cardId, cardsPackId));
  };

  const editCard = (_id: string, question?: string, answer?: string) => {
    dispatch(updateCardTC(_id, question, answer));
  };

  return (
    <>
      {cards.map(card =>
        <Col
          key={card._id}
          xxl={8}
          xl={12}
          lg={12}
          flex={'none'}>
          <Card
            onDelete={() => deleteCard(card._id, card.cardsPack_id)}
            key={card._id}
            onEdit={(question?: string, answer?: string) => {
              editCard(card._id, question, answer);
            }}
            ownCard={userId === card.user_id}
            card={card}/>
        </Col>
      )}
    </>
  );
};