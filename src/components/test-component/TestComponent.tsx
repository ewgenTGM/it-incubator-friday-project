import React, {useState} from 'react';
import styles from './TestComponent.module.css';
import {api} from '../../utils/api';

type PropsType = {};

export const TestComponent: React.FC<PropsType> = props => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any | null>(null);

  const registerCallback = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setResponse(null);
    setError(false);
    setEmail('');
    setPwd('');
    setRemember(false);

    event.preventDefault();
    try {
      const res = await api.register(email, pwd);
      setResponse(res.addedUser);
    } catch (e) {
      setError(true);
      setResponse(e.response ? e.response.data.error : e.message);
    } finally {
      setLoading(false);
    }
  };

  const authMeCallback = async () => {
    try {
      const res = await api.me();
      setResponse(res);
    } catch (e) {
      setError(true);
      setResponse(e.response ? e.response.data.error : e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      Регистрация
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
        <div className={styles.button}>
          <button onClick={registerCallback}>Отправить</button>
        </div>
      </form>
      Проверить логинизацию
      <div className={styles.button}>
        <button onClick={authMeCallback}>Проверить</button>
      </div>
      <div>
        <pre className={error ? styles.error : ''}>{JSON.stringify(response, null, 2)}</pre>
      </div>
    </div>
  );
};