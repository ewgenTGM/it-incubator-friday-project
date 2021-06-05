import React, {useState} from 'react';
import styles from './TrainingCard.module.css';
import {CardType} from '../../utils/cardsApi';
import {Button, Col, Row} from 'antd';

type PropsType = {
  card: CardType,
  showAnswer: boolean
};

export const TrainingCard: React.FC<PropsType> = props => {
  const {card, showAnswer} = props;

  return (
    <>
      <Row
        className={styles.title}
        justify={'center'}>
        Вопрос:
      </Row>
      <Row
        className={styles.question}
        justify={'center'}>
        {card.question}
      </Row>
      {showAnswer && <><Row
          className={styles.title}
          justify={'center'}>
          Ответ:
      </Row>
          <Row
              className={styles.question}
              justify={'center'}>
            {card.answer}
          </Row></>}

    </>
  );
};