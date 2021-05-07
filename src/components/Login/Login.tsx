import React, {useState} from 'react';
import styles from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {LoginStateType, loginTC} from '../../store/login-reducer';
import {AppStateType} from '../../store/store';
import {Redirect} from 'react-router-dom';
import {emailValidator} from '../../utils/validators/email-validator';
import {passwordValidator} from '../../utils/validators/password-validator';

export const Login: React.VFC = () => {
    const [email, setEmail] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);

    const dispatch = useDispatch();
    const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
    const loginStatus = useSelector<AppStateType, LoginStateType>(state => state.login);

    const loginCallback = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(loginTC(email, pwd, remember));
      setEmail('');
      setPwd('');
      setRemember(false);
    };

    const errorBlock: JSX.Element = <div className={styles.error}>{loginStatus.error}</div>;

    const form: JSX.Element = <div>
      Логинизация
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label
            htmlFor="email"
            className={styles.fieldLabel}>Введите email</label>
          <input
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            className={styles.textField}
            id={'email'}
            type="email"/>
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="password"
            className={styles.fieldLabel}>Введите пароль</label>
          <input
            value={pwd}
            onChange={e => setPwd(e.currentTarget.value)}
            className={styles.textField}
            id={'password'}
            type="password"/>
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="rememberMe"
            className={styles.fieldLabel}>Запомнить меня</label>
          <input
            checked={remember}
            onChange={e => setRemember(e.currentTarget.checked)}
            id={'rememberMe'}
            type="checkbox"/>
        </div>
        {!emailValidator(email) && <span className={styles.error}>Неверный email</span>}
        {!passwordValidator(pwd) && <span className={styles.error}>Короткий пароль</span>}
        <div className={styles.button}>
          <button
            onClick={loginCallback}
            disabled={!emailValidator(email) || !passwordValidator(pwd)}>Войти
          </button>
        </div>
      </form>
    </div>;

    if (isAuth) {
      return <Redirect to={'/profile'}/>;
    }

    return (
      <>
        {loginStatus.loading
          ? <span>Ждите отстоя пива...</span>
          : form
        }
        {loginStatus.error && errorBlock}
      </>
    );
  }
;