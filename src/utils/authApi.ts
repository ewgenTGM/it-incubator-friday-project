import axios from 'axios';
import {API} from './constants';

const FROM = 'test-front-admin<test@test.com>';

const instance = axios.create({baseURL: API, withCredentials: true});

export const authApi = {

  passRecovery(email: string) {
    const htmlBody = `<div style="background-color: lime; padding: 15px">
                       password recovery link: 
              <a href="https://ewgentgm.github.io/it-incubator-friday-project/#/set-new-password/$token$">
              link
              </a></div>`;
    const reqBody = {
      email,
      from: FROM,
      message: htmlBody
    };
    return instance.post<InfoResponseType>('/auth/forgot', reqBody);
  },

  setNewPassword(password: string, resetPasswordToken: string) {
    return instance.post<InfoResponseType>('/auth/set-new-password', {password, resetPasswordToken});
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<LoginResponseType>('/auth/login', {email, password, rememberMe}).then(res => res.data);
  },

  logout() {
    return instance.delete<InfoResponseType>('/auth/me', {}).then(res => res.data);
  },

  me() {
    return instance.post<LoginResponseType>('/auth/me', {}).then(res => res.data);
  },

  register(email: string, password: string) {
    return instance.post<RegisterResponseType>('/auth/register', {email, password}).then(res => res.data);
  }
};

export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
}

export type InfoResponseType = {
  info: string
  error?: string
}

type RegisterResponseType = {
  addedUser: any
  error?: string
}