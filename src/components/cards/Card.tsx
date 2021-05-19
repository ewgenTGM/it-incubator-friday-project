import React from 'react';
import styles from './Card.module.css';
import {CardType} from '../../utils/cardsApi';
import {Button, Popconfirm} from 'antd';

type PropsType = {
  card: CardType
  onDelete: () => void
};

export const Card: React.FC<PropsType> = props => {
  const {card, onDelete} = props;
  return (

    <div className={styles.card}>
      <h3>{card.question}</h3>
      <Popconfirm
        onConfirm={onDelete}
        title={'Точно удалить?'}
        cancelText={'Нет'}
        okText={'Да'}
        placement={'top'}
        cancelButtonProps={{type: 'primary'}}
        okButtonProps={{danger: true}}>
        < Button danger>
          Remove
        </Button>
      </Popconfirm>
    </div>

  );
};