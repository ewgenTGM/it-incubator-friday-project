import React from 'react';
import styles from './CardPack.module.css';
import {CardsPackType} from '../../utils/cardPacksApi';
import {Button, Popconfirm} from 'antd';
import {Link} from 'react-router-dom';

type PropsType = {
  cardPack: CardsPackType
  isMyCardPack: boolean
  onDelete: () => void
};

export const CardPack: React.FC<PropsType> = props => {
  const {cardPack, onDelete, isMyCardPack} = props;

  return (
    <div className={styles.pack}>
      <div className={styles.packHeader}>
        <h3 style={{textAlign: 'center', textTransform: 'uppercase'}}>{cardPack.name}</h3>
      </div>
      <div className={styles.ratingCount}>
        <div className={styles.cardsCount}>
          <h4>Cards count:</h4>
          <span>{cardPack.cardsCount}</span>
        </div>
        <div className={styles.rating}>
          <h4>Rating:</h4>
          <span>{cardPack.rating}</span>
        </div>
      </div>
      <div className={styles.ratingCount}>
        <div className={styles.cardsCount}>
          <h4>Shots:</h4>
          <span>{cardPack.shots}</span>
        </div>
        <div className={styles.rating}>
          <h4>Grade:</h4>
          <span>{cardPack.grade}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Link to={`/cards/${cardPack._id}`}><Button
          className={styles.action}
          disabled={!isMyCardPack && cardPack.cardsCount === 0}
        >
          View</Button></Link>
        <Button
          className={styles.action}
          disabled={!isMyCardPack}>Edit</Button>
        <Popconfirm
          onConfirm={onDelete}
          title={'Точно удалить?'}
          cancelText={'Нет'}
          okText={'Да'}
          placement={'top'}
          cancelButtonProps={{type: 'primary'}}
          okButtonProps={{danger: true}}>
          < Button
            disabled={!isMyCardPack}
            className={styles.action}
            danger>Remove
          </Button>
        </Popconfirm>
      </div>
      <div className={styles.user}>
        <span>{cardPack.user_name}</span>
      </div>
    </div>
  );
};