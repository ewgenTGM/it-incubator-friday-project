import React from 'react';
import {useParams} from 'react-router-dom';

type PropsType = {};

export const PassChange: React.FC<PropsType> = props => {

  const {token} = useParams<{token: string}>();

  return (
    <div>
      Смена пароля <br/>
      <span>Token = [{token}]</span>
    </div>
  );
};