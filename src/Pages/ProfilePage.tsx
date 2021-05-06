import React from 'react';
import {Profile} from '../components/profile/Profile';

type PropsType = {};

export const ProfilePage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Profile Page</h2>
      <Profile/>
    </div>
  );
};