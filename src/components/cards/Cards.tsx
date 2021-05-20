import React, {useState} from 'react';
import {CardType} from '../../utils/cardsApi';
import {Card} from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCardTC} from '../../store/cards-reducer';
import {Button, Col} from 'antd';
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

  return (
    <>
      {cards.map(card =>
        <Col
          xxl={6}
          xl={8}
          lg={12}
          flex={'none'}>
          <Card
            onDelete={() => deleteCard(card._id, card.cardsPack_id)}
            key={card._id}
            ownCard={userId === card.user_id}
            card={card}/>
        </Col>
      )}
    </>
  );
};