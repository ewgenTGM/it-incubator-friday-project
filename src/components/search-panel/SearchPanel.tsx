import {Button, Input} from 'antd';
import React, {ChangeEvent, useState} from 'react';
import styles from './SearchPanel.module.css';

type PropsType = {
  inputPlaceholder?: string
  disabled?: boolean
  onSearch: (searchText: string) => void
};

export const SearchPanel: React.FC<PropsType> = props => {

  const [text, setText] = useState<string>('');

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const onSearch = () => {
    props.onSearch(text);
    setText('');
  };

  return (
    <div className={styles.searchPanel}>
      <Input
        disabled={props.disabled}
        placeholder={props.inputPlaceholder}
        value={text}
        onKeyPress={event => event.key === 'Enter' && onSearch()}
        onChange={inputChangeHandler}/>
      <Button
        onClick={onSearch}
        disabled={props.disabled}>Поиск</Button>
    </div>
  );
};