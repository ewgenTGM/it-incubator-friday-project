import {Button, Col, Row, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import styles from './TrainPage.module.css';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setCardsTC, setGradeTC, TrainingStateType} from '../store/training-reducer';
import {TrainingCard} from '../components/training-card/TrainingCard';
import {AppStateType} from '../store/store';
import {CardType} from '../utils/cardsApi';
import {Spinner} from '../components/spinner/Spinner';
import {PATH} from '../routes/Routes';

type PropsType = {};

export const TrainPage: React.FC<PropsType> = props => {
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);
  const [firstRun, setFirstRun] = useState<boolean>(true);
  const [checked, setChecked] = useState(false);
  const {cardPackId} = useParams<{cardPackId: string}>();
  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const {cards, cardsPack, error, loading} = useSelector<AppStateType, TrainingStateType>(state => state.train);
  const dispatch = useDispatch();
  const grades: Array<string> = ['Не знаю', 'Знаю плохо', 'Нужно повторить', 'Знаю хорошо', 'Знаю отлично'];

  const getNextCard = () => {
    const rand = Math.floor(Math.random() * ( cards.length + 1 ));
    setCurrentCard(cards[rand]);
    setChecked(false);
  };

  useEffect(() => {
    console.log('Training page useEffect call');
    if (firstRun) {
      console.log('dispatch(setCardsTC(cardPackId))');
      dispatch(setCardsTC(cardPackId));
      setFirstRun(false);
    }

    if (cards.length > 0) {
      getNextCard();
    }

    return () => {
      console.log('Training page useEffect off');
    };

  }, [cardPackId, dispatch, firstRun, cards]);

  if (cards.length === 0) {
    return <>
      <Row>
        <h3>Вы выбрали пустую колоду</h3>
      </Row>
    </>;
  }

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  const takeGrade = (grade: number) => {
    if (currentCard)
    dispatch(setGradeTC(currentCard._id, grade));
  };
  const gradeButtons: Array<JSX.Element> = grades.map((grade, index) =>
    <Button
      onClick={() => takeGrade(index)}
      disabled={!checked || loading}>{grade}</Button>);

  return (
    <>
      <Row>
        <h3>Learning Page</h3>
      </Row> {loading
      ? <Row><Spinner/></Row>
      : currentCard && <TrainingCard
        showAnswer={checked}
        card={currentCard}/>}
      <Row
        justify={'center'}
        style={{marginTop: '10px'}}>
        <Space>
          {!checked && <Button onClick={() => setChecked(true)}>Показать ответ</Button>}
          <Button
            onClick={getNextCard}
            disabled={loading}>Следующая карта</Button></Space>
      </Row>
      {checked && <Row
          justify={'center'}
          style={{marginTop: '10px'}}>
          <Space>{gradeButtons}</Space>
      </Row>}
    </>
  );
};