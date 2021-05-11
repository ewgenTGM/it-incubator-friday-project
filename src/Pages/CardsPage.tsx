import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {Cards} from '../components/cards/Cards';

type PropsType = {};

export const CardsPage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  return (
    <div>
      <h2>Cards Page</h2>
      <Cards/>
    </div>
  );
};