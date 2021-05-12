import React, {useEffect} from 'react';
import {Routes} from '../routes/Routes';
import {Navbar} from './navbar/Navbar';
import commonStyles from '../components/common/commonStyle.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../store/store';
import {AppInitializeTC} from '../store/app-reducer';
import {Spinner} from './spinner/Spinner';

function App() {

  const dispatch = useDispatch();
  const isInitialized = useSelector<AppStateType, boolean>(state => state.appStatus.isInitialized);
  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(AppInitializeTC());
    }
    return;
  });

  return (
    isInitialized
      ? <>
        {isAuth && <Navbar/>}
        <div className={commonStyles.container}>
          <h1 style={{textAlign: 'center'}}>This is mega super friday project</h1>
          <Routes/>
        </div>
      </>
      : <Spinner/>
  );
}

export default App;
