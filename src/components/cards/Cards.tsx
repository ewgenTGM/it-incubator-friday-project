import React, {useState} from 'react';
import styles from './Cards.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {CardPacksStateType, setCardPacksTC} from '../../store/card-packs-reducer';
import {Link} from 'react-router-dom';

type PropsType = {};

export const Cards: React.FC<PropsType> = props => {

  const cardPacksStatus = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);
  const dispatch = useDispatch();

  const setCardPacks = () => {
    dispatch(setCardPacksTC());
  };

  const tableRows: Array<JSX.Element> = cardPacksStatus.cardPacks.map(cp => {
    return (
      <tr className={styles.trow}>
        <td className={styles.tableCell}>{cp.name}</td>
        <td className={styles.tableCell}>{cp.cardsCount}</td>
        <td className={styles.tableCell}>{cp.grade}</td>
        <td className={styles.tableCell}>{cp.rating}</td>
        <td className={styles.tableCell}>{cp.shots}</td>
        <td className={styles.tableCell}>
          <button><Link to={`/card?cardPackId=${cp._id}`}>Просмотр</Link></button>
          <button>Удалить</button>
        </td>
      </tr>
    );
  });

  const table: JSX.Element = <table className={styles.table}>
    <thead className={styles.thead}>
    <tr className={styles.headRow}>
      <th className={styles.headCell}>Name</th>
      <th className={styles.headCell}>Cards count</th>
      <th className={styles.headCell}>Grade</th>
      <th className={styles.headCell}>Rating</th>
      <th className={styles.headCell}>Shots</th>
      <th className={styles.headCell}>Action</th>
    </tr>
    </thead>
    <tbody className={styles.tableBody}>{tableRows}</tbody>
  </table>;

  return (
    <div>
      <button
        onClick={setCardPacks}
        disabled={cardPacksStatus.loading}>
        Получить колоды
      </button>
      <div>
        {!cardPacksStatus.error && cardPacksStatus.cardPacks.length > 0 && table}
      </div>
      <div>
        {cardPacksStatus.error && <span style={{color: 'red'}}>{cardPacksStatus.error}</span>}
      </div>
    </div>
  );
};