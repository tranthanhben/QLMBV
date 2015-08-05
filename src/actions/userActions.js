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
