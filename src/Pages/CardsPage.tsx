import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import {AppStateType} from '../store/store';
import {PATH} from '../routes/Routes';
import {Cards} from '../components/cards/Cards';
import {addCardTC, CardsStateType, setCardsTC, setPage, setPageCount} from '../store/cards-reducer';
import {Alert, Pagination, Row, Col, Spin, Divider} from 'antd';
import {AddCardForm} from '../components/cards/AddCardForm';
import {AddCardRequestType} from '../utils/cardsApi';

type PropsType = {};

export const CardsPage: React.FC<PropsType> = props => {

  const dispatch = useDispatch();
  const isAuth = useSelector<AppStateType, boolean>(state => state.appStatus.isAuth);
  const {cardPackId} = useParams<{cardPackId: string}>();
  const {
    error,
    loading,
    cards,
    cardsTotalCount,
    page,
    pageCount,
  } = useSelector<AppStateType, CardsStateType>(state => state.cards);
  useEffect(() => {
    dispatch(setCardsTC(pageCount, page, cardPackId));
  }, [pageCount, page, cardPackId, dispatch]);

  if (!isAuth) {
    return <Redirect to={PATH.LOGIN}/>;
  }

  const onChangeHandler = (page: number) => {
    dispatch(setPage(page));
  };

  const onShowSizeChangeHandler = (current: number, size: number) => {
    dispatch(setPageCount(size));
  };

  const onAddCard = (card: Partial<AddCardRequestType>) => {
    dispatch(addCardTC({...card, cardsPack_id: cardPackId}));
  };

  const pagination: JSX.Element = <Pagination
    onShowSizeChange={onShowSizeChangeHandler}
    onChange={onChangeHandler}
    defaultCurrent={1}
    showSizeChanger={true}
    current={page}
    pageSize={pageCount}
    disabled={loading || cardsTotalCount === 0}
    showQuickJumper
    total={cardsTotalCount}/>;

  return (
    <>
      <Row justify={'center'}>
        <Col
          span={16}
          offset={4}>
          {pagination}
        </Col>
      </Row>
      <Divider plain>
        {cardPackId}
      </Divider>
      {
        <Row justify={'center'}>
          <Col span={12}>
            <AddCardForm
              onSubmit={onAddCard}
              disabled={loading}/>
          </Col>
        </Row>}
      {error &&
      <Row
          style={{marginTop: '25px'}}
          justify={'center'}>
          <Col>
              <Alert
                  message={error}
                  type="error"
                  closeText={'Close'}
                  closable
              />
          </Col>
      </Row>}
      {loading
        ? <Row justify={'center'}>
          <Spin
            size={'large'}
            tip={'Loading...'}/>
        </Row>
        :
        <>
          <Divider plain>
            {cards.length === 0 ? 'А карточек-то нет....' : 'Карточки из колоды'}
          </Divider>
          <Row
            justify={'center'}
            wrap
            gutter={[40, 40]}>
            <Cards cards={cards}/>
          </Row>
        </>
      }
    </>
  );
};