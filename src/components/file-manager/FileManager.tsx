import {Button} from 'antd';
import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './FileManager.module.css';
import {fileApi} from '../../utils/fileApi';

type PropsType = {};

type FileInfoType = {
  name: string, size: number, type: string
}

export const FileManager: React.FC<PropsType> = props => {

  const [files, setFiles] = useState<FileList | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);

  function getFilesInfo(files: FileList): Array<FileInfoType> {
    const arr: Array<FileInfoType> = [];
    for (let i = 0; i < files.length; i++) {
      arr.push({name: files[i].name, size: files[i].size, type: files[i].type});
    }
    return arr;
  }

  const strFileSize = (n: number) => {
    if (n < 1024) {
      return n + ' bytes';
    } else if (n > 1024 && n < 1048576) {
      return ( n / 1024 ).toFixed(2) + ' KB';
    } else if (n > 1048576) {
      return ( n / 1048576 ).toFixed(2) + ' MB';
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(null);
    setImage(null);
    if (e.currentTarget.files) {
      setFiles(e.currentTarget.files);
      if (e.currentTarget.files[0].type.includes('image')) {
        setImage(URL.createObjectURL(e.currentTarget.files[0]));
      }
      if (e.currentTarget.files[0].type.includes('text')) {
        const reader = new FileReader();
        reader.readAsText(e.currentTarget.files[0]);
        reader.onerror = (error) => {
          console.log(error);
        };
        reader.onload = () => {
          setText(reader.result as string);
        };
      }
    }
  }

  function uploadFile() {
    if (files) {
      const formData = new FormData();
      formData.append('myFile', files[0], files[0].name);
      fileApi.send(formData).then(console.log);
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2>File manager component</h2>
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        hidden/>
      <Button
        onClick={() => {
          inputRef.current && inputRef.current.click();
        }}>Добавить</Button>
      <div>
        {files && <pre>{JSON.stringify(getFilesInfo(files), (key, value) => {
          return key === 'size' ? strFileSize(value) : value;
        }, 2)}</pre>}
      </div>
      <div>
        {image && <img
            style={{objectFit: 'cover', width: '300px'}}
            src={image}
            alt="img"/>}
        {text && <pre>{text}</pre>}
      </div>
      <div>
        <Button onClick={uploadFile}>Отправить на сервер</Button>
      </div>
      <div>
        <Button>Получить с сервера</Button>
      </div>
    </div>
  );
};