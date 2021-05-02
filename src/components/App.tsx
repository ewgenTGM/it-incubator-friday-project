import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Routes} from '../routes/Routes';
import {Navbar} from './navbar/Navbar';
import commonStyles from '../components/common/commonStyle.module.css';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <div className={commonStyles.container}>
          <h1 style={{textAlign: 'center'}}>This is mega super friday project</h1>
          <Routes/>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
