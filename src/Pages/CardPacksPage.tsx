import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {CardPacks} from '../components/card-packs/CardPacks';
import {Pagination} from 'antd';
import {CardPacksStateType, setCardPacksTC, setPageCount} from '../store/card-packs-reducer';
import {log} from 'util';

type PropsType = {};

export const CardPacksPage: React.FC<PropsType> = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCardPacksTC());
  }, [dispatch]);

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const {
    error,
    loading,
    cardPacks,
    cardPacksTotalCount,
    page,
    pageCount
  } = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);

  useEffect(() => {
    dispatch(setCardPacksTC());
  }, [pageCount, dispatch]);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  const onShowSizeChangeHandler = (current: number, size: number) => {
    console.log(pageCount);
    dispatch(setPageCount(size));
  };

  return (
    <div>
      <h2>Card Packs Page</h2>
      <Pagination
        onShowSizeChange={onShowSizeChangeHandler}
        defaultCurrent={1}
        current={page}
        disabled={loading}
        showQuickJumper
        total={cardPacksTotalCount}/>
      {<CardPacks/> || error}
    </div>
  );
};