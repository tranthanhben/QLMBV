import {makeQuery} from 'meta';
import {
  TTNCC_LIST_LOAD,
  TTNCC_LIST_LOAD_SUCCESS,
  TTNCC_LIST_LOAD_FAIL,

  TTNCC_ONE_LOAD,
  TTNCC_ONE_LOAD_SUCCESS,
  TTNCC_ONE_LOAD_FAIL,

  TTNCC_POST,
  TTNCC_POST_SUCCESS,
  TTNCC_POST_FAIL,

  TTNCC_PUT,
  TTNCC_PUT_SUCCESS,
  TTNCC_PUT_FAIL,

  TTNCC_DELETE,
  TTNCC_DELETE_SUCCESS,
  TTNCC_DELETE_FAIL,

  TTNCC_CTTT,
  TTNCC_CTTT_SUCCESS,
  TTNCC_CTTT_FAIL,

  TTNCC_GET,
  TTNCC_GET_SUCCESS,
  TTNCC_GET_FAIL,

  TTNCC_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [TTNCC_ONE_LOAD, TTNCC_ONE_LOAD_SUCCESS, TTNCC_ONE_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_dat_hang/'+id)
  };
}

export function getItem(id){
  return {
    types: [TTNCC_GET, TTNCC_GET_SUCCESS, TTNCC_GET_FAIL],
    promise: (client) => client.get('/giaodich/phieu_dat_hang/'+ id)
  };
}

export function deleteItem(id){
  return {
    types: [TTNCC_DELETE, TTNCC_DELETE_SUCCESS, TTNCC_DELETE_FAIL],
    promise: (client) => client.del('/phieu_dat_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [TTNCC_LIST_LOAD, TTNCC_LIST_LOAD_SUCCESS, TTNCC_LIST_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_dat_hang',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        id: options.id || '',
        sort: options.sort || '',
        newtt: options.newtt || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [TTNCC_PUT, TTNCC_PUT_SUCCESS, TTNCC_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/phieu_dat_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [TTNCC_POST, TTNCC_POST_SUCCESS, TTNCC_POST_FAIL],
    promise: (client) => client.post('/giaodich/phieu_dat_hang', {
      data: JSON.stringify(data)
    })
  };
}
export function postCTTT(data){
  return {
    types: [TTNCC_CTTT, TTNCC_CTTT_SUCCESS, TTNCC_CTTT_FAIL],
    promise: (client) => client.post('/chi_tiet_thanh_toan', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: TTNCC_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieudathang && globalState.phieudathang.loaded;
}
