import React, {ChangeEvent, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import styles from './PassChange.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {changePassTC, PassChangeStateType} from '../../store/pass-change-reducer';
import {AppStateType} from '../../store/store';
import {matchPasswordValidator, passwordValidator} from '../../utils/validators/password-validator';
import {Spinner} from '../spinner/Spinner';
import {PATH} from '../../routes/Routes';

type PropsType = {};

export const SetNewPass: React.FC<PropsType> = props => {

  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setConfirmPassword] = useState('');

  const statePassReducer = useSelector<AppStateType, PassChangeStateType>(state => state.passChange);

  const dispatch = useDispatch();
  const {token} = useParams<{token: string}>();
  const changePass = () => {
    dispatch(changePassTC(newPassword, token));
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.currentTarget.value);
  };
  const changeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  if (statePassReducer.isChangedPass) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  return (
    <div className={styles.passChange}>
      <div className={styles.passChangeContainer}>
        {!statePassReducer.loading ? <div className={styles.passChangeForm}>
            <span>Смена пароля</span>
            Введите новый пароль<input
            type="password"
            value={newPassword}
            onChange={changePassword}/>
            Подтвердите новый пароль<input
            type="password"
            value={newPassword2}
            onChange={changeConfirmPassword}/>
            <button
              disabled={!passwordValidator(newPassword) || !matchPasswordValidator(newPassword, newPassword2)}
              onClick={changePass}>Отправить
            </button>
            {!passwordValidator(newPassword) &&
            <span style={{color: 'red'}}>Пароль должен содержать более 6 символов</span>}
            {!matchPasswordValidator(newPassword, newPassword2) &&
            <span style={{color: 'red'}}>Пароли не совпадают</span>}
          </div>
          :
          <Spinner/>
        }
      </div>
    </div>
  );
};