import React, {useState} from 'react';
import {Button, Col, Input, Row} from 'antd';
import {AddCardRequestType} from '../../utils/cardsApi';

type PropsType = {
  onSubmit: (card: Partial<AddCardRequestType>) => void
  disabled?: boolean
};

export const AddCardForm: React.FC<PropsType> = props => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const rowStyle = {marginBottom: '15px'};

  const handleSubmit = () => {
    props.onSubmit({question: question, answer: answer});
    clearForm();
  };

  const clearForm = () => {
    setAnswer('');
    setQuestion('');
  };

  return (
    <>
      <Row
        style={rowStyle}
        wrap
        gutter={20}
        justify={'center'}
        align={'middle'}>
        <Col
          span={4}
          style={{textAlign: 'right'}}>
           <span>
            Вопрос
          </span>
        </Col>
        <Col span={16}>
          <Input
            disabled={props.disabled}
            onChange={e => setQuestion(e.currentTarget.value)}
            value={question}
            size={'small'}
            placeholder={'Вопрос'}/>
        </Col>
      </Row>
      <Row
        style={rowStyle}
        wrap
        gutter={20}
        justify={'center'}
        align={'middle'}>
        <Col
          span={4}
          style={{textAlign: 'right'}}>
           <span>
            Ответ
          </span>
        </Col>
        <Col span={16}>
          <Input.TextArea
            disabled={props.disabled}
            allowClear
            onChange={e => setAnswer(e.currentTarget.value)}
            value={answer}
            size={'small'}
            placeholder={'Ответ'}/>
        </Col>
      </Row>
      <Row
        justify={'center'}
        align={'middle'}
        gutter={20}>
        <Col
          span={16}
          offset={4}>
          <Button
            disabled={props.disabled}
            size={'small'}
            onClick={handleSubmit}
          >
            Добавить
          </Button>
          <Button
            disabled={props.disabled}
            size={'small'}
            onClick={clearForm}
          >
            Отмена
          </Button>
        </Col>
      </Row>
    </>
  );
};