import React from 'react';
import {NavLink} from 'react-router-dom';
import {Login} from '../components/Login/Login';
import styles from './LoginPage.module.css';
import {PATH} from '../routes/Routes';

type PropsType = {};

export const LoginPage: React.FC<PropsType> = props => {
  return (
    <div className={styles.loginPage}>
      <h2 className={styles.h2}>Выполните вход в наше суперское приложение</h2>
      <h4 className={styles.h4}>Вы можете зарегистрироваться <NavLink to={PATH.REGISTER}>здесь</NavLink></h4>
      <h4 className={styles.h4}>Если Вы забыли свой пароль, то
                                Вам <NavLink to={PATH.PASS_RECOVERY}>сюда</NavLink></h4>
      <Login/>
    </div>
  );
};