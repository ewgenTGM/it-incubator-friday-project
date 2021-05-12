import React, {useState} from 'react';
import styles from './PasswordRecovery.module.css';
import {authApi, InfoResponseType} from '../../utils/authApi';
import * as buffer from 'buffer';
import {emailValidator} from '../../utils/validators/email-validator';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {PassChangeStateType} from '../../store/pass-change-reducer';
import {PassRecoveryStateType, passRecoveryTC} from '../../store/pass-recovery-reducer';

type PropsType = {};

export const PasswordRecovery: React.FC<PropsType> = props => {

  const [email, setEmail] = useState<string>('');

  const dispatch = useDispatch();
  const recoveryStatus = useSelector<AppStateType, PassRecoveryStateType>(state => state.passRecovery);

  if (recoveryStatus.isEmailSend) {
    return (
      <div>
        <span
          style={{
            color: 'blue',
            textAlign: 'center'
          }}>Всё отлично, иди проверяй почту, и жми <NavLink to={PATH.LOGIN}>ссылку</NavLink></span>
      </div>
    );
  }

  return (
    <div className={styles.passRecovery}>
      <h3>Форма восстановление пароля</h3>
      {!recoveryStatus.loading
        ? <div className={styles.recoveryForm}>
          <label htmlFor="email">Введите ваш email:</label>
          <input
            type="email"
            name={'email'}
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}/>
          <button
            onClick={() => dispatch(passRecoveryTC(email))}
            disabled={!emailValidator(email)}>Отправить
          </button>
        </div>
        : <span style={{textAlign: 'center'}}>Отправка....</span>}
      {recoveryStatus.error && <span style={{color: 'red', textAlign: 'center'}}>{recoveryStatus.error}</span>}
    </div>
  );
};
