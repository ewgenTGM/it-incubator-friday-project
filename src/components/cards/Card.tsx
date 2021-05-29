import React, {useState} from 'react';
import styles from './Card.module.css';
import {CardType} from '../../utils/cardsApi';
import {Button, Col, Input, Popconfirm, Row} from 'antd';
import {Modal} from '../modal/Modal';

type PropsType = {
  card: CardType
  onDelete: () => void
  onEdit: (question?: string, answer?: string) => void
  ownCard?: boolean
};

export const Card: React.FC<PropsType> = props => {
  const {card, onDelete, onEdit, ownCard = false} = props;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>(card.question);
  const [answer, setAnswer] = useState<string>(card.answer);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modal: React.ReactNode = <Modal
    onClose={closeModal}
    onSubmit={() => onEdit(question ?? undefined, answer ?? undefined)}
    visibility={showModal}>
    <h2>Редактирование карточки:</h2>
    <Input
      allowClear
      width={200}
      placeholder={'Введите ваш вопрос'}
      onChange={e => setQuestion(e.currentTarget.value)}
      value={question}/>
    <Input
      style={{marginTop: '15px'}}
      allowClear
      width={200}
      placeholder={'Введите ваш ответ'}
      onChange={e => setAnswer(e.currentTarget.value)}
      value={answer}/>
  </Modal>;

  const buttons: JSX.Element = <Row justify={'center'}>
    <Col span={12}>
      <Button
        className={styles.cardButton}
        onClick={openModal}>
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
    <>
      {modal}
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
    </>
  );
};