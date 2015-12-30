import {makeQuery} from 'meta';
import {
  TTKH_LIST_LOAD,
  TTKH_LIST_LOAD_SUCCESS,
  TTKH_LIST_LOAD_FAIL,

  TTKH_ONE_LOAD,
  TTKH_ONE_LOAD_SUCCESS,
  TTKH_ONE_LOAD_FAIL,

  TTKH_POST,
  TTKH_POST_SUCCESS,
  TTKH_POST_FAIL,

  TTKH_PUT,
  TTKH_PUT_SUCCESS,
  TTKH_PUT_FAIL,

  TTKH_DELETE,
  TTKH_DELETE_SUCCESS,
  TTKH_DELETE_FAIL,

  TTKH_CTTT,
  TTKH_CTTT_SUCCESS,
  TTKH_CTTT_FAIL,

  TTKH_GET,
  TTKH_GET_SUCCESS,
  TTKH_GET_FAIL,

  TTKH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [TTKH_ONE_LOAD, TTKH_ONE_LOAD_SUCCESS, TTKH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+id)
  };
}

export function getItem(id){
  return {
    types: [TTKH_GET, TTKH_GET_SUCCESS, TTKH_GET_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+ id)
  };
}

export function deleteItem(id){
  return {
    types: [TTKH_DELETE, TTKH_DELETE_SUCCESS, TTKH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_mua_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [TTKH_LIST_LOAD, TTKH_LIST_LOAD_SUCCESS, TTKH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        sort: options.sort || '',
        id: options.id || '',
        newtt: options.newtt || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [TTKH_PUT, TTKH_PUT_SUCCESS, TTKH_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/phieu_mua_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [TTKH_POST, TTKH_POST_SUCCESS, TTKH_POST_FAIL],
    promise: (client) => client.post('/giaodich/phieu_mua_hang', {
      data: JSON.stringify(data)
    })
  };
}
export function postCTTT(data){
  return {
    types: [TTKH_CTTT, TTKH_CTTT_SUCCESS, TTKH_CTTT_FAIL],
    promise: (client) => client.post('/chi_tiet_thanh_toan', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: TTKH_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieudathang && globalState.phieudathang.loaded;
}
