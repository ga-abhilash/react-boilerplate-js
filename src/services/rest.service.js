import axios from 'axios';
import history from "../helpers/history";

import {AUTH_KEY_NAME} from "../helpers/constants";

const {REACT_APP_BASEURL} = process.env;

axios.defaults.baseURL = REACT_APP_BASEURL;

/**
 * Global request function for handling all HTTP calls
 * @param method
 * @param url
 * @param options {params: <for query params>, payload: <for data to be sent>'}
 */

const request = (
    method,
    url,
    options = {params: {}, payload: {}, requestOptions: {}},
) => {
  const request = {
    url,
    method,
    params: options.params,
    data: options.payload,
    ...options.requestOptions,
  };

  return new Promise((resolve, reject) => {
    axios
        .request(request)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
  });
};

export const POST = (path, payload, requestOptions) => {
  return request('POST', path, {payload, requestOptions});
};

export const GET = (path, params) => {
  return request('GET', path, {params});
};

export const PUT = (path, payload) => {
  return request('PUT', path, {payload});
};

export const PATCH = (path, payload) => {
  return request('PATCH', path, {payload});
};

export const DELETE = (path) => {
  return request('DELETE', path);
};

axios.interceptors.request.use((request) => {
  const headers = {};

  const accessToken = localStorage.getItem(AUTH_KEY_NAME);
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  headers.Accept = 'application/json';
  headers['Content-Type'] = 'application/json';
  request.headers = headers;
  return request;
});

/**
 * RESPONSE INTERCEPTOR
 */
axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const errorResponse = error.response;
      console.log(errorResponse);

      if (errorResponse.status === 401) {
        localStorage.removeItem(AUTH_KEY_NAME);
        return history.replace('/login');
      }
      return Promise.reject(errorResponse.data);
    },
);
