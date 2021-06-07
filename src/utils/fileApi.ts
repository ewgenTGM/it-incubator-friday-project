import axios from 'axios';
import {fileApiBaseURL} from './constants';

const instance = axios.create({baseURL: fileApiBaseURL});

export const fileApi = {
  send(formData: FormData) {
    return instance.post('/file', formData);
  }
};