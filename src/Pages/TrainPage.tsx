import {Button, Row} from 'antd';
import React, {useEffect, useState} from 'react';
import styles from './TrainPage.module.css';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setCardsTC, TrainingStateType} from '../store/training-reducer';
import {TrainingCard} from '../components/training-card/TrainingCard';
import {AppStateType} from '../store/store';
import {CardType} from '../utils/cardsApi';
import {Spinner} from '../components/spinner/Spinner';
import {PATH} from '../routes/Routes';

type PropsType = {};

export const TrainPage: React.FC<PropsType> = props => {
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);
  const [firstRun, setFirstRun] = useState<boolean>(true);
  const {cardPackId} = useParams<{cardPackId: string}>();
  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const trainingState = useSelector<AppStateType, TrainingStateType>(state => state.train);
  const dispatch = useDispatch();
  const grades: Array<string> = ['Не знаю', 'Знаю плохо', 'Нужно повторить', 'Знаю хорошо', 'Знаю отлично'];

  const getNextCard = (cards: Array<CardType>): CardType => {
    const rand = Math.floor(Math.random() * ( trainingState.cards.length + 1 ));

    return trainingState.cards[rand];
  };

  useEffect(() => {
    console.log('Training page useEffect call');
    if (firstRun) {
      console.log('dispatch(setCardsTC(cardPackId))');
      dispatch(setCardsTC(cardPackId));
      setFirstRun(false);
    }

    if (trainingState.cards.length > 0) {
      setCurrentCard(getNextCard(trainingState.cards));
    }

    return () => {
      console.log('Training page useEffect off');
    };

  }, [cardPackId, dispatch, firstRun, trainingState.cards]);

  if (trainingState.cards.length === 0) {
    return <>
      <Row>
        <h3>Вы выбрали пустую колоду</h3>
      </Row>
    </>;
  }

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  return (
    <>
      <Row>
        <h3>Learning Page</h3>
      </Row>
      {trainingState.loading
        ? <Row><Spinner/></Row>
        : currentCard && <TrainingCard
          getNext={() => setCurrentCard(getNextCard(trainingState.cards))}
          card={currentCard}/>}
    </>
  );
};