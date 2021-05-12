import React, {useState} from 'react';
import styles from './CardPacks.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {CardPacksStateType, setCardPacksTC} from '../../store/card-packs-reducer';
import {Link} from 'react-router-dom';
import {Spinner} from '../spinner/Spinner';

type PropsType = {};

export const CardPacks: React.FC<PropsType> = props => {

  const cardPacksStatus = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState<number>(10);

  const setCardPacks = () => {
    dispatch(setCardPacksTC(pageCount));
  };

  const tableRows: Array<JSX.Element> = cardPacksStatus.cardPacks.map((cp, index) => {
    return (
      <tr
        className={styles.trow}
        key={cp._id}>
        <td className={styles.tableCell}>{index + 1}</td>
        <td className={styles.tableCell}>{cp.name}</td>
        <td className={styles.tableCell}>{cp.cardsCount}</td>
        <td className={styles.tableCell}>{cp.grade}</td>
        <td className={styles.tableCell}>{cp.rating}</td>
        <td className={styles.tableCell}>{cp.shots}</td>
        <td className={styles.tableCell}>
          <Link to={`/cards/${cp._id}`}>
            <button>Просмотр</button>
          </Link>
          <button>Удалить</button>
        </td>
      </tr>
    );
  });

  const table: JSX.Element = <table className={styles.table}>
    <thead className={styles.thead}>
    <tr className={styles.headRow}>
      <th className={styles.headCell}>#</th>
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
      <select
        value={pageCount}
        onChange={e => setPageCount(parseInt(e.currentTarget.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
      </select>
      <button
        onClick={setCardPacks}
        disabled={cardPacksStatus.loading}>
        Получить колоды
      </button>
      {cardPacksStatus.loading ? <Spinner/> :
        <>
          <div>
            {!cardPacksStatus.error && cardPacksStatus.cardPacks.length > 0 && table}
          </div>
          <div>
            {cardPacksStatus.error && <span style={{color: 'red'}}>{cardPacksStatus.error}</span>}
          </div>
        </>}
    </div>
  );
}
;