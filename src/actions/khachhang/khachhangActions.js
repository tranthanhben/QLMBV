import {makeQuery} from 'meta';
import {
  KH_LIST_LOAD,
  KH_LIST_LOAD_SUCCESS,
  KH_LIST_LOAD_FAIL,

  KH_ONE_LOAD,
  KH_ONE_LOAD_SUCCESS,
  KH_ONE_LOAD_FAIL,

  KH_POST,
  KH_POST_SUCCESS,
  KH_POST_FAIL,

  KH_PUT,
  KH_PUT_SUCCESS,
  KH_PUT_FAIL,

  KH_DELETE,
  KH_DELETE_SUCCESS,
  KH_DELETE_FAIL,

  KH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [KH_ONE_LOAD, KH_ONE_LOAD_SUCCESS, KH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/khach_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [KH_DELETE, KH_DELETE_SUCCESS, KH_DELETE_FAIL],
    promise: (client) => client.del('/khach_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [KH_LIST_LOAD, KH_LIST_LOAD_SUCCESS, KH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/khach_hang',{
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
      types: [KH_PUT, KH_PUT_SUCCESS, KH_PUT_FAIL],
      promise: (client) => client.put(`/khach_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [KH_POST, KH_POST_SUCCESS, KH_POST_FAIL],
    promise: (client) => client.post('/khach_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: KH_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.khachhang && globalState.khachhang.loaded;
}
