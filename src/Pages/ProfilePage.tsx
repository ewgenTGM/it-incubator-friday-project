import React from 'react';
import {Profile} from '../components/profile/Profile';
import {useSelector} from 'react-redux';
import {AppStateType} from '../store/store';
import {Redirect} from 'react-router-dom';

type PropsType = {};

export const ProfilePage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <Profile/>
    </div>
  );
};