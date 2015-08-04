import {
  ME_LOAD,
  ME_LOAD_SUCCESS,
  ME_LOAD_FAIL,
  LOGIN_LOAD,
  LOGIN_LOAD_SUCCESS,
  LOGIN_LOAD_FAIL,
} from './actionTypes';

export function loadMe(){
  return {
    types: [ME_LOAD, ME_LOAD_SUCCESS, ME_LOAD_FAIL],
    promise: (client) => client.get('/me')
  };
}

export function login(){
  return {
    types: [LOGIN_LOAD, LOGIN_LOAD_SUCCESS, LOGIN_LOAD_FAIL],
    promise: (client) => client.get('/login')
  };
}

