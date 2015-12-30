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

  PXH_CTK,
  PXH_CTK_SUCCESS,
  PXH_CTK_FAIL,

  PXH_GET,
  PXH_GET_SUCCESS,
  PXH_GET_FAIL,

  PXH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [PXH_ONE_LOAD, PXH_ONE_LOAD_SUCCESS, PXH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+id)
  };
}

export function getItem(id){
  return {
    types: [PXH_GET, PXH_GET_SUCCESS, PXH_GET_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+ id)
  };
}

export function deleteItem(id){
  return {
    types: [PXH_DELETE, PXH_DELETE_SUCCESS, PXH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_mua_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [PXH_LIST_LOAD, PXH_LIST_LOAD_SUCCESS, PXH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        sort: options.sort || '',
        id: options.id || '',
        newpnh: options.newpnh || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [PXH_PUT, PXH_PUT_SUCCESS, PXH_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/phieu_mua_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [PXH_POST, PXH_POST_SUCCESS, PXH_POST_FAIL],
    promise: (client) => client.post('/giaodich/phieu_mua_hang', {
      data: JSON.stringify(data)
    })
  };
}
export function postCTK(data){
  return {
    types: [PXH_CTK, PXH_CTK_SUCCESS, PXH_CTK_FAIL],
    promise: (client) => client.post('/chi_tiet_kho', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: PXH_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieudathang && globalState.phieudathang.loaded;
}
