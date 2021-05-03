import React, {useState} from 'react';
import styles from './PasswordRecovery.module.css';

type PropsType = {};

export const PasswordRecovery: React.FC<PropsType> = props => {

  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendData = async () => {
    setLoading(true);
    // Пока просто заглушка
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className={styles.passRecovery}>
      <h3>Форма восстановление пароля</h3>
      {!loading
        ? <div className={styles.recoveryForm}>
          <label htmlFor="email">Введите ваш email:</label>
          <input
            type="email"
            name={'email'}
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}/>
          <button onClick={sendData}>Отправить</button>
        </div>
        : <span style={{textAlign: 'center'}}>Отправка....</span>}
    </div>
  );
};