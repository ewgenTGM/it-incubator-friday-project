import React from 'react';
import {SetNewPass} from '../components/set-new-pass/SetNewPass';

type PropsType = {};

export const SetNewPasswordPage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Password Change Page</h2>
      <SetNewPass/>
    </div>
  );
};