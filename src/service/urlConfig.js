import axios from 'axios';
import { store } from '../redux/store';
import {
  turnOffLoading,
  turnOnLoading,
} from '../redux/loadingReducer/loadingSlice';

export const BASE_URL = 'https://movienew.cybersoft.edu.vn';
export const MA_NHOM = 'GP09';
export const TOKEN_CYBER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.36nQu-fyhBElKov0sWvrvwuO832nQWmfRIHcRVPB7Mw';

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(turnOnLoading());
    // Bật loading khi bắt đầu gửi request
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 2000);

    // tắt loading khi nhận response
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // tắt loading khi nhận reject
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 2000);

    return Promise.reject(error);
  },
);
