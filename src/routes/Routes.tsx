import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {LoginPage} from '../Pages/LoginPage';
import {RegisterPage} from '../Pages/RegisterPage';
import {ProfilePage} from '../Pages/ProfilePage';
import {PassRecoveryPage} from '../Pages/PassRecoveryPage';
import {TestPage} from '../Pages/TestPage';
import {Page404} from '../Pages/Page404';
import {PassChangePage} from '../Pages/PassChangePage';

export enum PATH {
  LOGIN = '/login',
  REGISTER = '/register',
  PROFILE = '/profile',
  PAGE404 = '/404',
  PASS_RECOVERY = '/password-recovery',
  TEST = '/test',
  PASS_CHANGE = '/password-change'
}

export const Routes: React.VFC = () => {

  return (
    <>
      <Switch>
        <Route
          path={'/'}
          exact
          render={() => <Redirect to={PATH.TEST}/>}
        />
        <Route
          path={PATH.LOGIN}
          render={() => <LoginPage/>}/>
        <Route
          path={PATH.REGISTER}
          render={() => <RegisterPage/>}/>
        <Route
          path={PATH.PROFILE}
          render={() => <ProfilePage/>}/>
        <Route
          path={PATH.PASS_RECOVERY}
          render={() => <PassRecoveryPage/>}/>
        <Route
          path={PATH.PASS_CHANGE}
          render={() => <PassChangePage/>}/>
        <Route
          path={PATH.TEST}
          render={() => <TestPage/>}/>
        <Route render={() => <Page404/>}/>
      </Switch>
    </>
  );
};