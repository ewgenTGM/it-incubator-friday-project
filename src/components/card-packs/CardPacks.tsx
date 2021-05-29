import React from 'react';
import styles from './CardPacks.module.css';
import {CardsPackType} from '../../utils/cardPacksApi';
import {CardPack} from './CardPack';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCardsPackTC, updateCardsPack} from '../../store/card-packs-reducer';
import {AppStateType} from '../../store/store';

type PropsType = {
  cardPacks: Array<CardsPackType>
};

export const CardPacks: React.VFC<PropsType> = props => {

  const dispatch = useDispatch();
  const userId = useSelector<AppStateType, string | undefined>(state => state.appStatus.authData._id);

  const {cardPacks} = props;

  const deleteCardsPack = (cardsPackId: string) => {
    dispatch(deleteCardsPackTC(cardsPackId));
  };

  const editCardPack = (id: string, name: string) => {
    //todo: Проверка пустых строк
    dispatch(updateCardsPack(id, name));
  };

  return (
    <div className={styles.packsContainer}>
      {cardPacks.map(cp => <CardPack
        cardPack={cp}
        isMyCardPack={userId === cp.user_id}
        onDelete={() => deleteCardsPack(cp._id)}
        onEdit={(name: string) => editCardPack(cp._id, name)}
        key={cp._id}/>)}
    </div>
  );
};