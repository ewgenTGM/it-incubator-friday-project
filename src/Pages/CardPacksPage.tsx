import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {CardPacks} from '../components/card-packs/CardPacks';
import {Pagination, Spin} from 'antd';
import {CardPacksStateType, setCardPacksTC, setPage, setPageCount} from '../store/card-packs-reducer';

type PropsType = {};

export const CardPacksPage: React.FC<PropsType> = props => {

  const dispatch = useDispatch();

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
    dispatch(setCardPacksTC(pageCount, page));
  }, [pageCount, page, dispatch]);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  const onChangeHandler = (page: number) => {
    dispatch(setPage(page));
  };

  const onShowSizeChangeHandler = (current: number, size: number) => {
    dispatch(setPageCount(size));
  };

  return (
    <div>
      <h2>Card Packs Page</h2>
      <Pagination
        onShowSizeChange={onShowSizeChangeHandler}
        onChange={onChangeHandler}
        defaultCurrent={1}
        current={page}
        disabled={loading}
        showQuickJumper
        total={cardPacksTotalCount}/>
      <div style={{marginTop: '25px', textAlign: 'center'}}>{loading
        ? <Spin
          size={'large'}
          tip={'Loading...'}/>
        : <CardPacks cardPacks={cardPacks}/> || error
      }</div>
    </div>
  );
};