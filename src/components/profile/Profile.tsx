import React, {useEffect} from 'react';
import styles from './Profile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {LoginResponseType} from '../../utils/authApi';

type PropsType = {};

export const Profile: React.FC<PropsType> = props => {

  const dispatch = useDispatch();
  const authData = useSelector<AppStateType, LoginResponseType | {}>(state => state.appStatus.authData);

  return (
    <div>
      <pre>{JSON.stringify(authData, null, 2)}</pre>
    </div>
  );
};