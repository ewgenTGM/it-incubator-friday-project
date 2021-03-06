import React from 'react';
import styles from './NotFound.module.css';
import img404 from './404.png';
import {NavLink} from 'react-router-dom';

type PropsType = {};

export const NotFound: React.FC<PropsType> = props => {

  return (
    <div className={styles.notFound}>
      <div className={styles.rotate}>
        <span>404</span>
      </div>
      <NavLink to={'/test'}>
        На главную
      </NavLink>
    </div>
  );
};