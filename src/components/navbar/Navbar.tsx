import {NavLink} from 'react-router-dom';
import {PATH} from '../../routes/Routes';
import React from 'react';
import styles from './Navbar.module.css';
import commonStyles from '../common/commonStyle.module.css';

export function Navbar() {
  return <nav className={styles.navbar}>
    <div className={commonStyles.container}>

      <ul>
        <li>
          <NavLink
            to={PATH.LOGIN}
            activeClassName={styles.linkActive}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATH.REGISTER}
            activeClassName={styles.linkActive}>
            Register
          </NavLink>
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
            to={PATH.PASS_RECOVERY}
            activeClassName={styles.linkActive}>
            Pass recovery
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATH.PASS_CHANGE}
            activeClassName={styles.linkActive}>
            Pass change
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATH.TEST}
            activeClassName={styles.linkActive}>
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATH.PAGE404}
            activeClassName={styles.linkActive}>
            404
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>;
}