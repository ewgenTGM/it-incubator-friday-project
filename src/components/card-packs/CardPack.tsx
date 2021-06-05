import React, {useState} from 'react';
import styles from './CardPack.module.css';
import {CardsPackType} from '../../utils/cardPacksApi';
import {Button, Col, Input, Popconfirm, Row} from 'antd';
import {Link} from 'react-router-dom';
import {Modal} from '../modal/Modal';

type PropsType = {
  cardPack: CardsPackType
  isMyCardPack: boolean
  onDelete: () => void
  onEdit: (newName: string) => void
};

export const CardPack: React.FC<PropsType> = props => {

  const {cardPack, onDelete, isMyCardPack, onEdit} = props;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(cardPack.name);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        visibility={showModal}
        onClose={closeModal}
        onSubmit={() => onEdit(newName)}>
        <h2>Редактирование колоды</h2>
        <Input
          allowClear
          width={200}
          placeholder={'Новое название'}
          onChange={e => setNewName(e.currentTarget.value)}
          value={newName}/>
      </Modal>
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
        <Row
          align={'middle'}>
          <Col span={12}>
            <Link to={`/cards/${cardPack._id}`}>
              <Button
                className={styles.action}
                disabled={!isMyCardPack && cardPack.cardsCount === 0}
              >
                View</Button></Link></Col>
          <Col span={12}>
            <Link to={`/train/${cardPack._id}`}>
              <Button
                className={styles.action}
                disabled={!isMyCardPack && cardPack.cardsCount === 0}
              >
                Train
              </Button>
            </Link>
          </Col>
        </Row>
        {isMyCardPack && <Row
            align={'middle'}>
            <Col>
                <Button
                    className={styles.action}
                    onClick={openModal}>
                    Edit
                </Button>
            </Col>
            <Col>
                <Popconfirm
                    onConfirm={onDelete}
                    title={'Точно удалить?'}
                    cancelText={'Нет'}
                    okText={'Да'}
                    placement={'top'}
                    cancelButtonProps={{type: 'primary'}}
                    okButtonProps={{danger: true}}>
                    <Button
                        className={styles.action}
                        danger>Remove
                    </Button>
                </Popconfirm>
            </Col>
        </Row>}
        <div className={styles.user}>
          <span>{cardPack.user_name}</span>
        </div>
      </div>
    </>
  );
};
