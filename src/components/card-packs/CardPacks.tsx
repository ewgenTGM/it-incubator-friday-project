import React from 'react';
import styles from './CardPacks.module.css';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {CardPackType} from '../../utils/cardPacksApi';
import {CardPack} from './CardPack';
import {useDispatch} from 'react-redux';
import {deleteCardPackTC} from '../../store/card-packs-reducer';

type PropsType = {
  cardPacks: Array<CardPackType>
};

export const CardPacks: React.VFC<PropsType> = props => {

    const dispatch = useDispatch();

    const {cardPacks} = props;

    const deleteCardPack = (cardPackId: string) => {
      dispatch(deleteCardPackTC(cardPackId));
    };

    const tableRows: Array<JSX.Element> = cardPacks.map((cp, index) => {
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

    return (
      <div className={styles.cardsContainer}>
        {cardPacks.map(cp => <CardPack
          cardPack={cp}
          onDelete={() => deleteCardPack(cp._id)}
          key={cp._id}/>)}
      </div>
      /*<table className={styles.table}>
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
       </table>*/
    );
  }
;
;
