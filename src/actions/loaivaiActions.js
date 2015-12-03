import {makeQuery} from 'meta';
import {
  LV_LIST_LOAD,
  LV_LIST_LOAD_SUCCESS,
  LV_LIST_LOAD_FAIL,

  LV_ONE_LOAD,
  LV_ONE_LOAD_SUCCESS,
  LV_ONE_LOAD_FAIL,

  LV_POST,
  LV_POST_SUCCESS,
  LV_POST_FAIL,

  LV_PUT,
  LV_PUT_SUCCESS,
  LV_PUT_FAIL,

  LV_DELETE,
  LV_DELETE_SUCCESS,
  LV_DELETE_FAIL,

  LV_GET,
  LV_GET_SUCCESS,
  LV_GET_FAIL,

  LV_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [LV_ONE_LOAD, LV_ONE_LOAD_SUCCESS, LV_ONE_LOAD_FAIL],
    promise: (client) => client.get('/loai_vai/'+id)
  };
}

export function getItem(id){
  return {
    types: [LV_GET, LV_GET_SUCCESS, LV_GET_FAIL],
    promise: (client) => client.get('/loai_vai/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [LV_DELETE, LV_DELETE_SUCCESS, LV_DELETE_FAIL],
    promise: (client) => client.del('/loai_vai/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LV_LIST_LOAD, LV_LIST_LOAD_SUCCESS, LV_LIST_LOAD_FAIL],
    promise: (client) => client.get('/loai_vai',{
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
      types: [LV_PUT, LV_PUT_SUCCESS, LV_PUT_FAIL],
      promise: (client) => client.put(`/loai_vai/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [LV_POST, LV_POST_SUCCESS, LV_POST_FAIL],
    promise: (client) => client.post('/loai_vai', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: LV_RESET
  }
}

export function isLoaded(globalState) {
  return globalState.loai_vai && globalState.loai_vai.loaded;
}
