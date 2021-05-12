import React from 'react';
import styles from './Spinner.module.css';

type PropsType = {};

export const Spinner: React.FC<PropsType> = props => {
  return (
    <div className={styles.loader}>
      Ждите отстоя пива
    </div>
  );
};