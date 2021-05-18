import React from 'react';
import styles from './Cards.module.css';
import {CardType} from '../../utils/cardsApi';

type PropsType = {
  cards: Array<CardType>
};

export const Cards: React.FC<PropsType> = props => {
  console.log(props);
  const {cards} = props;
  return (
    <div>
      <pre>{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
};