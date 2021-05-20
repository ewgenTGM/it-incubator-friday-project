import React from 'react';
import styles from './Card.module.css';
import {CardType} from '../../utils/cardsApi';
import {Button, Col, Popconfirm, Row} from 'antd';

type PropsType = {
  card: CardType
  onDelete: () => void
  ownCard?: boolean
};

export const Card: React.FC<PropsType> = props => {
  const {card, onDelete, ownCard = false} = props;

  const buttons: JSX.Element = <Row justify={'center'}>
    <Col span={12}>
      <Button
        className={styles.cardButton}>
        Edit
      </Button>
    </Col>
    <Col span={12}>
      <Popconfirm
        onConfirm={onDelete}
        title={'Точно удалить?'}
        cancelText={'Нет'}
        okText={'Да'}
        placement={'top'}
        cancelButtonProps={{type: 'primary'}}
        okButtonProps={{danger: true}}>
        < Button
          danger
          className={styles.cardButton}>
          Remove
        </Button>
      </Popconfirm>
    </Col>
  </Row>;

  return (

    <div className={styles.card}>
      <Row
        justify={'center'}
        align={'middle'}>
        <h3>Q: {card.question}</h3>
      </Row>
      <Row
        justify={'center'}
        align={'middle'}>
        <span>A: {card.answer}</span>
      </Row>
      <Row
        justify={'center'}
        style={{margin: '10px 0'}}>
        <Col span={12}>
          <span className={styles.cardStats}>Rating: </span>
          <span className={styles.cardStatsValue}>{card.rating}</span>
        </Col>
        <Col span={12}>
          <span className={styles.cardStats}>Shots: </span>
          <span className={styles.cardStatsValue}>{card.shots}</span>
        </Col>
      </Row>
      <Row
        justify={'center'}
        style={{margin: '10px 0'}}>
        <Col span={12}><span className={styles.cardStats}>Grade: </span>
          <span className={styles.cardStatsValue}>{card.grade.toFixed(4)}</span></Col>
      </Row>
      {ownCard && buttons}
    </div>

  );
};