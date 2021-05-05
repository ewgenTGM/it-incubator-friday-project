import React from 'react';
import styles from './TestComponent.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

export const TestComponent: React.VFC = () => {

  const allReducerData = useSelector<AppStateType, AppStateType>(state => state);
  const elements = Object.entries(allReducerData).map(elem => {
    return <div key={elem[0]}>
      <h5>{elem[0]}:</h5>
      <pre>{JSON.stringify(elem[1], null, 2)}</pre>
    </div>;
  });

  return (
    <div>
      <h3>All reducer data</h3>
      {elements}
    </div>
  );
};