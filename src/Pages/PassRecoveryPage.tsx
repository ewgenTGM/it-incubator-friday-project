import React from 'react';
import {PasswordRecovery} from '../components/pass-recovery/PasswordRecovery';

type PropsType = {};

export const PassRecoveryPage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Password Recovery Page</h2>
      <PasswordRecovery/>
    </div>
  );
};