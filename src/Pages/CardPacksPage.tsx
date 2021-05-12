import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {CardPacks} from '../components/card-packs/CardPacks';

type PropsType = {};

export const CardPacksPage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  return (
    <div>
      <h2>Card Packs Page</h2>
      <CardPacks/>
    </div>
  );
};