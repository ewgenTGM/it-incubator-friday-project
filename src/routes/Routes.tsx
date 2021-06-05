import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {LoginPage} from '../Pages/LoginPage';
import {RegisterPage} from '../Pages/RegisterPage';
import {ProfilePage} from '../Pages/ProfilePage';
import {PassRecoveryPage} from '../Pages/PassRecoveryPage';
import {TestPage} from '../Pages/TestPage';
import {Page404} from '../Pages/Page404';
import {SetNewPasswordPage} from '../Pages/SetNewPasswordPage';
import {CardPacksPage} from '../Pages/CardPacksPage';
import {CardsPage} from '../Pages/CardsPage';
import {TrainPage} from '../Pages/TrainPage';

export enum PATH {
  LOGIN = '/login',
  REGISTER = '/register',
  PROFILE = '/profile',
  CARD_PACKS = '/card-packs',
  CARDS = '/cards',
  TRAINING = '/train',
  PAGE404 = '/404',
  PASS_RECOVERY = '/password-recovery',
  TEST = '/test',
  SET_NEW_PASSWORD = '/set-new-password'
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
          exact
          render={() => <LoginPage/>}/>
        <Route
          path={PATH.REGISTER}
          exact
          render={() => <RegisterPage/>}/>
        <Route
          path={PATH.PROFILE}
          exact
          render={() => <ProfilePage/>}/>
        <Route
          path={PATH.PASS_RECOVERY}
          exact
          render={() => <PassRecoveryPage/>}/>
        <Route
          path={PATH.CARD_PACKS}
          exact
          render={() => <CardPacksPage/>}/>
        <Route
          path={PATH.SET_NEW_PASSWORD + '/:token'}
          exact
          render={() => <SetNewPasswordPage/>}/>
        <Route
          path={PATH.CARDS + '/:cardPackId'}
          exact
          render={() => <CardsPage/>}/>
        <Route
          path={PATH.TRAINING + '/:cardPackId'}
          exact
          render={() => <TrainPage/>}/>
        <Route
          path={PATH.TEST}
          exact
          render={() => <TestPage/>}/>
        <Route render={() => <Page404/>}/>
      </Switch>
    </>
  );
};