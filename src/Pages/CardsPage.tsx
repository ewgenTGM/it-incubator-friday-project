import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {PATH} from '../routes/Routes';

type PropsType = {};

export const CardsPage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const {cardPackId} = useParams<{cardPackId: string}>();

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  return (
    <div>
      <h2>Cards Page</h2>
      <span>Card pack id: {cardPackId}</span>
    </div>
  );
};