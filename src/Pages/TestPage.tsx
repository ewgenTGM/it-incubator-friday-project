import React from 'react';
import {TestComponent} from '../components/test-component/TestComponent';

type PropsType = {};

export const TestPage: React.FC<PropsType> = props => {
  return (
    <div>
      <h2>Test Page</h2>
      <TestComponent/>
    </div>
  );
};