import {makeQuery} from 'meta';
import {
  KHO_LIST_LOAD,
  KHO_LIST_LOAD_SUCCESS,
  KHO_LIST_LOAD_FAIL,

  KHO_ONE_LOAD,
  KHO_ONE_LOAD_SUCCESS,
  KHO_ONE_LOAD_FAIL,

  KHO_POST,
  KHO_POST_SUCCESS,
  KHO_POST_FAIL,

  KHO_PUT,
  KHO_PUT_SUCCESS,
  KHO_PUT_FAIL,

  KHO_DELETE,
  KHO_DELETE_SUCCESS,
  KHO_DELETE_FAIL,

  KHO_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [KHO_ONE_LOAD, KHO_ONE_LOAD_SUCCESS, KHO_ONE_LOAD_FAIL],
    promise: (client) => client.get('/kho/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [KHO_DELETE, KHO_DELETE_SUCCESS, KHO_DELETE_FAIL],
    promise: (client) => client.del('/kho/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [KHO_LIST_LOAD, KHO_LIST_LOAD_SUCCESS, KHO_LIST_LOAD_FAIL],
    promise: (client) => client.get('/kho',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        name: options.name || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [KHO_PUT, KHO_PUT_SUCCESS, KHO_PUT_FAIL],
      promise: (client) => client.put(`/kho/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [KHO_POST, KHO_POST_SUCCESS, KHO_POST_FAIL],
    promise: (client) => client.post('/kho', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: KHO_RESET
  }
}
