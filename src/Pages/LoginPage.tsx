import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {Login} from '../components/login/Login';
import styles from './LoginPage.module.css';
import commonStyles from '../components/common/commonStyle.module.css';
import {PATH} from '../routes/Routes';
import {useSelector} from 'react-redux';
import {AppStateType} from '../store/store';

type PropsType = {};

export const LoginPage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  if (isAuth) {
    return <Redirect to={'/profile'}/>;
  }

  return (
    <div className={commonStyles.fullscreen}>
      <div className={styles.loginPage}>
        <h2 className={styles.h2}>Выполните вход в наше суперское приложение</h2>
        <h4 className={styles.h4}>Вы можете зарегистрироваться <NavLink to={PATH.REGISTER}>здесь</NavLink></h4>
        <h4 className={styles.h4}>Если Вы забыли свой пароль, то
                                  Вам <NavLink to={PATH.PASS_RECOVERY}>сюда</NavLink></h4>
        <Login/>
      </div>
    </div>
  );
};