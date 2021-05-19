import React from 'react';
import styles from './CardPacks.module.css';
import {CardsPackType} from '../../utils/cardPacksApi';
import {CardPack} from './CardPack';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCardsPackTC} from '../../store/card-packs-reducer';
import {AppStateType} from '../../store/store';

type PropsType = {
  cardPacks: Array<CardsPackType>
};

export const CardPacks: React.VFC<PropsType> = props => {

    const dispatch = useDispatch();
    const userId = useSelector<AppStateType, string | undefined>(state => state.appStatus.authData._id);

    const {cardPacks} = props;

    const deleteCardPack = (cardPackId: string) => {
      dispatch(deleteCardsPackTC(cardPackId));
    };

    return (
      <div className={styles.packsContainer}>
        {cardPacks.map(cp => <CardPack
          cardPack={cp}
          isMyCardPack={userId===cp.user_id}
          onDelete={() => deleteCardPack(cp._id)}
          key={cp._id}/>)}
      </div>

    );
  }
;
