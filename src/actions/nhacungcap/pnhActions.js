import {makeQuery} from 'meta';
import {
  PNH_LIST_LOAD,
  PNH_LIST_LOAD_SUCCESS,
  PNH_LIST_LOAD_FAIL,

  PNH_ONE_LOAD,
  PNH_ONE_LOAD_SUCCESS,
  PNH_ONE_LOAD_FAIL,

  PNH_POST,
  PNH_POST_SUCCESS,
  PNH_POST_FAIL,

  PNH_PUT,
  PNH_PUT_SUCCESS,
  PNH_PUT_FAIL,

  PNH_DELETE,
  PNH_DELETE_SUCCESS,
  PNH_DELETE_FAIL,

  PNH_CTK,
  PNH_CTK_SUCCESS,
  PNH_CTK_FAIL,

  PNH_GET,
  PNH_GET_SUCCESS,
  PNH_GET_FAIL,

  PNH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [PNH_ONE_LOAD, PNH_ONE_LOAD_SUCCESS, PNH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_nhap_hang/'+id)
  };
}

export function getItem(id){
  return {
    types: [PNH_GET, PNH_GET_SUCCESS, PNH_GET_FAIL],
    promise: (client) => client.get('/giaodich/phieu_nhap_hang/'+ id)
  };
}

export function deleteItem(id){
  return {
    types: [PNH_DELETE, PNH_DELETE_SUCCESS, PNH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_nhap_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [PNH_LIST_LOAD, PNH_LIST_LOAD_SUCCESS, PNH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_nhap_hang',{
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
      types: [PNH_PUT, PNH_PUT_SUCCESS, PNH_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/phieu_nhap_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [PNH_POST, PNH_POST_SUCCESS, PNH_POST_FAIL],
    promise: (client) => client.post('/giaodich/phieu_nhap_hang', {
      data: JSON.stringify(data)
    })
  };
}
export function postCTK(data){
  return {
    types: [PNH_CTK, PNH_CTK_SUCCESS, PNH_CTK_FAIL],
    promise: (client) => client.post('/chi_tiet_kho', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: PNH_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieudathang && globalState.phieudathang.loaded;
}
