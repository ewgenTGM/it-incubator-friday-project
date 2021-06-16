import React, {useState} from 'react';
import styles from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {LoginStateType, loginTC} from '../../store/login-reducer';
import {AppStateType} from '../../store/store';
import {emailValidator} from '../../utils/validators/email-validator';
import {passwordValidator} from '../../utils/validators/password-validator';
import {Alert, Button, Input, Switch} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';

export const Login: React.VFC = () => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);

  const dispatch = useDispatch();

  const loginStatus = useSelector<AppStateType, LoginStateType>(state => state.login);

  const loginCallback = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(loginTC(email, pwd, remember));
  };

  const form: JSX.Element = <div>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <Input
          disabled={loginStatus.loading}
          type={'email'}
          placeholder="Input email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}/>
      </div>
      <div className={styles.formGroup}>
        <Input.Password
          disabled={loginStatus.loading}
          placeholder="Input password"
          value={pwd}
          onChange={e => setPwd(e.currentTarget.value)}/>
      </div>
      <div className={styles.rememberMeFormGroup}>
        <label
          htmlFor="rememberMe"
          className={styles.fieldLabel}>Запомнить меня</label>
        <Switch
          disabled={loginStatus.loading}
          checkedChildren={<CheckOutlined/>}
          unCheckedChildren={<CloseOutlined/>}
          defaultChecked={false}
          onChange={(checked) => setRemember(checked)}
        />
      </div>
      <Button
        type={'primary'}
        className={styles.button}
        onClick={loginCallback}
        loading={loginStatus.loading}
        disabled={!emailValidator(email) || !passwordValidator(pwd)}>
        Войти
      </Button>
      {!emailValidator(email) && <span className={styles.error}>Некорректный email</span>}
      {!passwordValidator(pwd) && <span className={styles.error}>Короткий пароль</span>}
    </form>
    {loginStatus.error && <Alert
        message={loginStatus.error}
        type="error"
        closable
    />}
  </div>;

  return (
    <>
      {form}
    </>
  );
};