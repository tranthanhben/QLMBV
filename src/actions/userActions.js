import {makeQuery} from 'meta';
import {
  ME_LOAD,
  ME_LOAD_SUCCESS,
  ME_LOAD_FAIL,

  LOGIN_LOAD,
  LOGIN_LOAD_SUCCESS,
  LOGIN_LOAD_FAIL,

  LOGOUT_LOAD,
  LOGOUT_LOAD_SUCCESS,
  LOGOUT_LOAD_FAIL,

  REGISTER_LOAD,
  REGISTER_LOAD_SUCCESS,
  REGISTER_LOAD_FAIL,

  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL

} from './actionTypes';

export function loadMe(){
  return {
    types: [ME_LOAD, ME_LOAD_SUCCESS, ME_LOAD_FAIL],
    promise: (client) => client.get('/me')
  };
}

export function login(account){
  return {
    types: [LOGIN_LOAD, LOGIN_LOAD_SUCCESS, LOGIN_LOAD_FAIL],
    promise: (client) => client.post('/login',{
      data: JSON.stringify(account)
    })
  };
}

export function logout(){
  return {
    types: [LOGOUT_LOAD, LOGOUT_LOAD_SUCCESS, LOGOUT_LOAD_FAIL],
    promise: (client) => client.post('/logout')
  };
}

export function register(){
  return {
    types: [REGISTER_LOAD, REGISTER_LOAD_SUCCESS, REGISTER_LOAD_FAIL],
    promise: (client) => client.post('/register')
  }
}

export function updateUser(){
  return {
    types: [UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL],
    promise: (client) => client.post('/register')
  }
}
