import React from 'react';
import {Login} from '../components/Login/Login';

type PropsType = {};

export const LoginPage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Login Page</h2>
      <Login/>
    </div>
  );
};