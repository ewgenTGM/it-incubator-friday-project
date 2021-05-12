import {NavLink} from 'react-router-dom';
import {PATH} from '../../routes/Routes';
import React from 'react';
import styles from './Navbar.module.css';
import commonStyles from '../common/commonStyle.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {LoginStateType, logoutTC} from '../../store/login-reducer';

export function Navbar() {

  const loginStatus = useSelector<AppStateType, LoginStateType>(state => state.login);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutTC());
  };

  return <nav className={styles.navbar}>
    <div className={commonStyles.container}>
      <ul>
        <li>
          <button
            onClick={logout}
            disabled={loginStatus.loading}>Logout
          </button>
        </li>
        <li>
          <NavLink
            to={PATH.PROFILE}
            activeClassName={styles.linkActive}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATH.CARD_PACKS}
            activeClassName={styles.linkActive}>
            Card packs
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATH.TEST}
            activeClassName={styles.linkActive}>
            Test
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>;
}