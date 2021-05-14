import React, {ChangeEvent, useState} from 'react';
import styles from './Register.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {InitialStateType, registerTC} from '../../store/registration-reducer';
import {AppStateType} from '../../store/store';
import {emailValidator} from '../../utils/validators/email-validator';
import {passwordValidator} from '../../utils/validators/password-validator';
import {Redirect} from 'react-router-dom';
import {Spinner} from '../spinner/Spinner';
import {PATH} from '../../routes/Routes';

export const Register: React.VFC = () => {

  const dispatch = useDispatch();
  const registerState = useSelector<AppStateType, InitialStateType>(state => state.registration);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onSubmit = () => {
    dispatch(registerTC(email, password));
    setPassword('');
  };

  if (registerState.isRegisterSuccess) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        {!registerState.loading ? <div className={styles.registerForm}>
            <input
              value={email}
              type="email"
              name="email"
              onChange={changeEmail}
              placeholder={'email'}/>
            <input
              value={password}
              type="password"
              onChange={changePassword}
              placeholder={'password'}/>
            {registerState.error && <div style={{color: 'red'}}>{registerState.error}</div>}
            <button
              disabled={!emailValidator(email) || !passwordValidator(password)}
              onClick={onSubmit}>Register
            </button>
            {!emailValidator(email) && <span style={{color: 'red'}}>Неверный email</span>}
            {!passwordValidator(password) && <span style={{color: 'red'}}>Пароль должен содержать более 6 символов</span>}
          </div>
          :
          <Spinner/>
        }
      </div>
    </div>
  );
};
