import {makeQuery} from 'meta';
import {
  NCC_LIST_LOAD,
  NCC_LIST_LOAD_SUCCESS,
  NCC_LIST_LOAD_FAIL,

  NCC_ONE_LOAD,
  NCC_ONE_LOAD_SUCCESS,
  NCC_ONE_LOAD_FAIL,

  NCC_POST,
  NCC_POST_SUCCESS,
  NCC_POST_FAIL,

  NCC_PUT,
  NCC_PUT_SUCCESS,
  NCC_PUT_FAIL,

  NCC_DELETE,
  NCC_DELETE_SUCCESS,
  NCC_DELETE_FAIL,

  NCC_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [NCC_ONE_LOAD, NCC_ONE_LOAD_SUCCESS, NCC_ONE_LOAD_FAIL],
    promise: (client) => client.get('/nha_cung_cap/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [NCC_DELETE, NCC_DELETE_SUCCESS, NCC_DELETE_FAIL],
    promise: (client) => client.del('/nha_cung_cap/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [NCC_LIST_LOAD, NCC_LIST_LOAD_SUCCESS, NCC_LIST_LOAD_FAIL],
    promise: (client) => client.get('/nha_cung_cap',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        name: options.name || '',
        sort: options.sort || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [NCC_PUT, NCC_PUT_SUCCESS, NCC_PUT_FAIL],
      promise: (client) => client.put(`/nha_cung_cap/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [NCC_POST, NCC_POST_SUCCESS, NCC_POST_FAIL],
    promise: (client) => client.post('/nha_cung_cap', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: NCC_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.nhacungcap && globalState.nhacungcap.loaded;
}
