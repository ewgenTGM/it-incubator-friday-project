import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './CardPacksPage.module.css';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {CardPacks} from '../components/card-packs/CardPacks';
import {Alert, Pagination, Spin, Switch} from 'antd';
import {CardPacksStateType, setCardPacksTC, setPage, setPageCount} from '../store/card-packs-reducer';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {SearchPanel} from '../components/search-panel/SearchPanel';

type PropsType = {};

export const CardPacksPage: React.FC<PropsType> = props => {

  const dispatch = useDispatch();

  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const myId = useSelector<AppStateType, string>(state => state.appStatus.authData._id ?? '');

  const {
    error,
    loading,
    cardPacks,
    cardPacksTotalCount,
    page,
    pageCount
  } = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);

  const [onlyMy, setOnlyMy] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setCardPacksTC(pageCount, page, onlyMy ? myId : undefined));
  }, [pageCount, page, onlyMy, myId, dispatch]);

  if (!isAuth) {
    return <Redirect to={'/login'}/>;
  }

  const onChangeHandler = (page: number) => {
    dispatch(setPage(page));
  };

  const onShowSizeChangeHandler = (current: number, size: number) => {
    dispatch(setPageCount(size));
  };

  const onSearch = (searchText: string) => {
    dispatch(setCardPacksTC(pageCount, page, onlyMy ? myId : undefined, searchText));
  };

  return (
    <>
      <h2>Card Packs Page</h2>
      <div className={styles.optionsBar}>
        <div className={styles.options}><Pagination
          onShowSizeChange={onShowSizeChangeHandler}
          onChange={onChangeHandler}
          defaultCurrent={1}
          current={page}
          pageSize={pageCount}
          disabled={loading}
          showQuickJumper
          total={cardPacksTotalCount}/>
          <label
            htmlFor="rememberMe"
          >Только мои колоды</label>
          <Switch
            disabled={loading}
            checkedChildren={<CheckOutlined/>}
            unCheckedChildren={<CloseOutlined/>}
            defaultChecked={false}
            checked={onlyMy}
            onChange={(checked) => setOnlyMy(checked)}
          />
        </div>
        <div className={styles.searchBar}>
          <SearchPanel
            disabled={loading}
            inputPlaceholder={'Введите название колоды'}
            onSearch={onSearch}/>
        </div>
      </div>
      <div style={{marginTop: '25px', textAlign: 'center'}}>
        {error && <Alert
            message={error}
            type="error"
            closable
        />}
        {loading
          ? <Spin
            size={'large'}
            tip={'Loading...'}/>
          : <CardPacks cardPacks={cardPacks}/>
        }</div>
    </>
  );
};