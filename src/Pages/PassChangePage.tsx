import React from 'react';
import {PassChange} from '../components/pass-change/PassChange';

type PropsType = {};

export const PassChangePage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Password Change Page</h2>
      <PassChange/>
    </div>
  );
};