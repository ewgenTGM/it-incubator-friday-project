import React from 'react';
import {CardType} from '../../utils/cardsApi';
import {Card} from './Card';
import {useDispatch} from 'react-redux';
import {deleteCardTC} from '../../store/cards-reducer';
import {Col} from 'antd';

type PropsType = {
  cards: Array<CardType>
};

export const Cards: React.FC<PropsType> = props => {

  const dispatch = useDispatch();
  const {cards} = props;
  const deleteCard = (cardId: string, cardsPackId: string) => {
    dispatch(deleteCardTC(cardId, cardsPackId));
  };
  return (
    <>
      {cards.map(card =>
        <Col xxl={6} xl={8} lg={12} flex={'none'}>
          <Card
          onDelete={() => deleteCard(card._id, card.cardsPack_id)}
          key={card._id}
          card={card}/>
        </Col>
      )}
    </>
  );
};