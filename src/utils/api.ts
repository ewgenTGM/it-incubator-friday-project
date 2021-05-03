import axios from 'axios';

const LOCAL_URL = 'http://localhost:7542/2.0/';
const REMOTE_URL = 'https://neko-back.herokuapp.com/2.0';
const FROM = 'test-front-admin <test@test.com>';

const instance = axios.create({baseURL: LOCAL_URL});

export const Api = {
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
    return instance.post('/auth/forgot', reqBody);
  }
};