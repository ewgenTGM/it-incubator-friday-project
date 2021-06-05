import React, {useState} from 'react';
import styles from './TrainingCard.module.css';
import {CardType} from '../../utils/cardsApi';
import {Button, Col, Row} from 'antd';

type PropsType = {
  card: CardType
  getNext: () => void
};

export const TrainingCard: React.FC<PropsType> = props => {
    const {card, getNext} = props;

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const getNextCard = () => {
      getNext();
      setIsChecked(false);
    };
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
        {isChecked && <><Row
            className={styles.title}
            justify={'center'}>
            Ответ:
        </Row>
            <Row
                className={styles.question}
                justify={'center'}>
              {card.answer}
            </Row></>}
        <Row justify={'center'}>
          <Col>
            {!isChecked && <Button
                onClick={() => setIsChecked(true)}>Показать ответ</Button>}
            <Button onClick={getNextCard}>Следующая</Button>
          </Col>
        </Row>
      </>
    );
  }
;