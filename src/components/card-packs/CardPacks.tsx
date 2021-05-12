import React, {useState} from 'react';
import styles from './CardPacks.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {CardPacksStateType, setCardPacksTC} from '../../store/card-packs-reducer';
import {Link} from 'react-router-dom';
import {Spinner} from '../spinner/Spinner';
import {Pagination, Button} from 'antd';

type PropsType = {};

export const CardPacks: React.FC<PropsType> = props => {

  const cardPacksStatus = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const setCardPacks = () => {
    dispatch(setCardPacksTC());
  };

  const handleChange = (event: any, value: number) => {
    setPage(value);
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
            <Button type={'link'}>Просмотр</Button>
          </Link>
          <Button
            type={'link'}
            danger>Удалить</Button>
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
};
