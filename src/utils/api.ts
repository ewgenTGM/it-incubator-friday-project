import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';
const FROM = 'test-front-admin<test@test.com>';

const instance = axios.create({baseURL: REMOTE_URL, withCredentials: true});

export const api = {

  passRecovery(email: string) {
    const htmlBody = `<div style="background-color: lime; padding: 15px">
                       password recovery link: 
              <a href="http://localhost:3000/#/set-new-password/$token$">
              link
              </a></div>`;
    const reqBody = {
      email,
      from: FROM,
      message: htmlBody
    };
    return instance.post<InfoResponseType>('/auth/forgot', reqBody).then(res => res.data);
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
  },
  changePass(password: string, resetPasswordToken: string) {
    return instance.post('/auth/set-new-password', {password, resetPasswordToken})
  }

};

export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;
  error?: string;
}

type InfoResponseType = {
  info: string
  error?: string
}

type RegisterResponseType = {
  addedUser: any
  error?: string
}