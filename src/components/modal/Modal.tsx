import React from 'react';
import styles from './Modal.module.css';
import {Button} from 'antd';

type ModalProps = {
  onClose: () => void
  onSubmit: () => void
  visibility: boolean
}
export const Modal: React.FC<ModalProps> = props => {
  const {onClose, onSubmit, visibility} = props;
  if (!visibility) {
    window.document.body.classList.remove('ov_hidden');
    return null;
  }

  window.document.body.classList.add('ov_hidden');

  return (
    <div
      className={styles.modal}
      onClick={props.onClose}>
      <div
        className={styles.modalContent}
        onClick={(event) => {
          event.stopPropagation();
        }}>
        <div className={styles.children}>
          <div
            className={styles.closeBtn}
            onClick={onClose}>X
          </div>
          {props.children}
        </div>
        <Button onClick={onSubmit}>Подтвердить</Button>
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};