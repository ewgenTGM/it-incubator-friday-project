import React from 'react';
import styles from './CardPacks.module.css';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {CardPackType} from '../../utils/cardPacksApi';
import {CardPack} from './CardPack';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCardPackTC} from '../../store/card-packs-reducer';
import {AppStateType} from '../../store/store';

type PropsType = {
  cardPacks: Array<CardPackType>
};

export const CardPacks: React.VFC<PropsType> = props => {

    const dispatch = useDispatch();
    const userId = useSelector<AppStateType, string | undefined>(state => state.appStatus.authData._id);

    const {cardPacks} = props;

    const deleteCardPack = (cardPackId: string) => {
      dispatch(deleteCardPackTC(cardPackId));
    };

    return (
      <div className={styles.cardsContainer}>
        {cardPacks.map(cp => <CardPack
          cardPack={cp}
          isMyCardPack={userId===cp.user_id}
          onDelete={() => deleteCardPack(cp._id)}
          key={cp._id}/>)}
      </div>

    );
  }
;
