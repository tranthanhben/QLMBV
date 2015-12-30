import {makeQuery} from 'meta';
import {
  PMH_LIST_LOAD,
  PMH_LIST_LOAD_SUCCESS,
  PMH_LIST_LOAD_FAIL,

  PMH_ONE_LOAD,
  PMH_ONE_LOAD_SUCCESS,
  PMH_ONE_LOAD_FAIL,

  PMH_POST,
  PMH_POST_SUCCESS,
  PMH_POST_FAIL,

  PMH_PUT,
  PMH_PUT_SUCCESS,
  PMH_PUT_FAIL,

  PMH_DELETE,
  PMH_DELETE_SUCCESS,
  PMH_DELETE_FAIL,

  PMH_CTDH,
  PMH_CTDH_SUCCESS,
  PMH_CTDH_FAIL,

  PMH_GET,
  PMH_GET_SUCCESS,
  PMH_GET_FAIL,

  PMH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [PMH_ONE_LOAD, PMH_ONE_LOAD_SUCCESS, PMH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+id)
  };
}

export function getItem(id){
  return {
    types: [PMH_GET, PMH_GET_SUCCESS, PMH_GET_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang/'+ id)
  };
}

export function deleteItem(id){
  return {
    types: [PMH_DELETE, PMH_DELETE_SUCCESS, PMH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_mua_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [PMH_LIST_LOAD, PMH_LIST_LOAD_SUCCESS, PMH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        sort: options.sort || '',
        id: options.id || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [PMH_PUT, PMH_PUT_SUCCESS, PMH_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/phieu_mua_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [PMH_POST, PMH_POST_SUCCESS, PMH_POST_FAIL],
    promise: (client) => client.post('/giaodich/phieu_mua_hang', {
      data: JSON.stringify(data)
    })
  };
}
export function postCTDH(data){
  return {
    types: [PMH_CTDH, PMH_CTDH_SUCCESS, PMH_CTDH_FAIL],
    promise: (client) => client.post('/chi_tiet_don_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: PMH_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.phieudathang && globalState.phieudathang.loaded;
}
