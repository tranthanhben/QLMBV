import {makeQuery} from 'meta';
import {
  PXH_LIST_LOAD,
  PXH_LIST_LOAD_SUCCESS,
  PXH_LIST_LOAD_FAIL,

  PXH_ONE_LOAD,
  PXH_ONE_LOAD_SUCCESS,
  PXH_ONE_LOAD_FAIL,

  PXH_POST,
  PXH_POST_SUCCESS,
  PXH_POST_FAIL,

  PXH_PUT,
  PXH_PUT_SUCCESS,
  PXH_PUT_FAIL,

  PXH_DELETE,
  PXH_DELETE_SUCCESS,
  PXH_DELETE_FAIL,

  PXH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [PXH_ONE_LOAD, PXH_ONE_LOAD_SUCCESS, PXH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/phieu_xuat_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [PXH_DELETE, PXH_DELETE_SUCCESS, PXH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_xuat_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [PXH_LIST_LOAD, PXH_LIST_LOAD_SUCCESS, PXH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/phieu_xuat_hang',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        sort: options.sort || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [PXH_PUT, PXH_PUT_SUCCESS, PXH_PUT_FAIL],
      promise: (client) => client.put(`/phieu_xuat_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [PXH_POST, PXH_POST_SUCCESS, PXH_POST_FAIL],
    promise: (client) => client.post('phieu_xuat_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: PHX_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieuxuat && globalState.phieuxuat.loaded;
}
