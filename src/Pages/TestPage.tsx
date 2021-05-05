import React from 'react';
import {TestComponent} from '../components/test-component/TestComponent';
import {AppStateType} from '../store/store';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

type PropsType = {};

export const TestPage: React.FC<PropsType> = props => {

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  return (
    <div>
      <h2>Test Page</h2>
      <TestComponent/>
    </div>
  );
};