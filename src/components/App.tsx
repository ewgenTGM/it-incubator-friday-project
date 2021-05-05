import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {Routes} from '../routes/Routes';
import {Navbar} from './navbar/Navbar';
import commonStyles from '../components/common/commonStyle.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../store/store';
import {AppInitializeTC} from '../store/app-reducer';

function App() {

  const dispatch = useDispatch();
  const isInitialized = useSelector<AppStateType, boolean>(state => state.appStatus.isInitialized);

  useEffect(() => {
    dispatch(AppInitializeTC());
  }, [dispatch]);

  return (
    <>
      {isInitialized
        ? <HashRouter>
          <Navbar/>
          <div className={commonStyles.container}>
            <h1 style={{textAlign: 'center'}}>This is mega super friday project</h1>
            <Routes/>
          </div>
        </HashRouter>
        : <span>Ждите отстоя пива...</span>
      }
    </>
  );
}

export default App;
