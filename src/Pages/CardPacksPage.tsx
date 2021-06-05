import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './CardPacksPage.module.css';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {CardPacks} from '../components/card-packs/CardPacks';
import {Alert, Pagination, Spin, Switch} from 'antd';
import {
  addCardsPackTC,
  CardPacksStateType,
  setCardsPacksTC,
  setOnlyMyPacksAC,
  setPageAC,
  setPageCountAC, setShowEmptyPacksAC
} from '../store/card-packs-reducer';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {FieldWithButton} from '../components/field-with-button/FieldWithButton';
import {PATH} from '../routes/Routes';

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
    pageCount,
    onlyMyPacks,
    showEmptyPacks
  } = useSelector<AppStateType, CardPacksStateType>(state => state.cardPacks);

  useEffect(() => {
    dispatch(setCardsPacksTC(pageCount, page, onlyMyPacks ? myId : undefined));
  }, [pageCount, page, onlyMyPacks, showEmptyPacks, myId, dispatch]);

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }
  const onChangeHandler = (page: number) => {
    dispatch(setPageAC(page));
  };

  const onShowSizeChangeHandler = (current: number, size: number) => {
    dispatch(setPageCountAC(size));
  };

  const onSearch = (searchText: string) => {
    dispatch(setCardsPacksTC(pageCount, page, onlyMyPacks ? myId : undefined, searchText));
  };

  const onAdd = (cardPackName: string) => {
    dispatch(addCardsPackTC({name: cardPackName}));
  };

  return (
    <>
      <h2>Card Packs Page</h2>
      <div className={styles.optionsBar}>
        <div className={styles.options}><Pagination
          onShowSizeChange={onShowSizeChangeHandler}
          onChange={onChangeHandler}
          defaultCurrent={1}
          showSizeChanger={true}
          current={page}
          pageSize={pageCount}
          disabled={loading}
          showQuickJumper
          total={cardPacksTotalCount}/>
        </div>
        <div className={styles.checkBoxBar}>
          <div className={styles.checkBoxBarItem}><label>Только мои колоды</label>
            <Switch
              disabled={loading}
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              checked={onlyMyPacks}
              onChange={(checked) => dispatch(setOnlyMyPacksAC(checked))}
            /></div>
          <div className={styles.checkBoxBarItem}><label>Показывать пустые колоды</label>
            <Switch
              disabled={loading}
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              checked={showEmptyPacks}
              onChange={(checked) => dispatch(setShowEmptyPacksAC(checked))}
            /></div>
        </div>
        <div className={styles.searchBar}>
          <FieldWithButton
            disabled={loading}
            inputPlaceholder={'Введите название колоды'}
            buttonLabel={'Поиск'}
            action={onSearch}/>
        </div>
        <div className={styles.searchBar}>
          <FieldWithButton
            disabled={loading}
            inputPlaceholder={'Название новой колоды'}
            buttonLabel={'Добавить'}
            action={onAdd}/>
        </div>
        <div style={{marginTop: '25px', textAlign: 'center'}}>
          {error && <Alert
              message={error}
              type="error"
              closeText={'Close'}
              closable
          />}
        </div>
      </div>
      {loading
        ? <div style={{marginTop: '25px', textAlign: 'center'}}>
          <Spin
            size={'large'}
            tip={'Loading...'}/>
        </div>
        : <CardPacks cardPacks={cardPacks}/>
      }
    </>
  );
};