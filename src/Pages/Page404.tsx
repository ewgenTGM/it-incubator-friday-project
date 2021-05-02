import React from 'react';
import {NotFound} from '../components/page404/NotFound';

type PropsType = {};

export const Page404: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Page 404</h2>
      <NotFound/>
    </div>
  );
};