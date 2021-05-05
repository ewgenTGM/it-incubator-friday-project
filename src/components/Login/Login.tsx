import React, {useState} from 'react';
import styles from './Login.module.css';
import {api} from '../../utils/api';

export const Login: React.VFC = () => {
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any | null>(null);

  const loginCallback = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setResponse(null);
    setError(false);
    setEmail('');
    setPwd('');
    setRemember(false);

    event.preventDefault();
    try {
      const res = await api.login(email, pwd, remember);
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
        <div className={styles.button}>
          <button onClick={loginCallback}>Войти</button>
        </div>
      </form>
      <div>
        {response &&
        <pre className={error ? styles.error : ''}>{JSON.stringify(response, null, 2)}</pre>}
      </div>
    </div>
  );
};