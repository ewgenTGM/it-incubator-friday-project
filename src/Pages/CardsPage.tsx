import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {PATH} from '../routes/Routes';
import {Cards} from '../components/cards/Cards';
import {CardsStateType, setCardsTC} from '../store/cards-reducer';

type PropsType = {};

export const CardsPage: React.FC<PropsType> = props => {

  const dispatch = useDispatch();
  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const {cardPackId} = useParams<{cardPackId: string}>();
  const {
    error,
    loading,
    cards,
    cardPacksTotalCount,
    maxCardsCount,
    minCardsCount,
    page,
    pageCount
  } = useSelector<AppStateType, CardsStateType>(state => state.cards);

  useEffect(() => {
    dispatch(setCardsTC(pageCount, page, cardPackId));
  }, [pageCount, page, cardPackId, dispatch]);

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  return (
    <div>
      <h2>Cards Page</h2>
      <span>Card pack id: {cardPackId}</span>
      <Cards cards={cards}/>
    </div>
  );
};