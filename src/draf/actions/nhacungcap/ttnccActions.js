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

  TTNCC_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [TTNCC_ONE_LOAD, TTNCC_ONE_LOAD_SUCCESS, TTNCC_ONE_LOAD_FAIL],
    promise: (client) => client.get('/thanh_toan_nha_cung_cap/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [TTNCC_DELETE, TTNCC_DELETE_SUCCESS, TTNCC_DELETE_FAIL],
    promise: (client) => client.del('/thanh_toan_nha_cung_cap/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [TTNCC_LIST_LOAD, TTNCC_LIST_LOAD_SUCCESS, TTNCC_LIST_LOAD_FAIL],
    promise: (client) => client.get('/thanh_toan_nha_cung_cap',{
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
      types: [TTNCC_PUT, TTNCC_PUT_SUCCESS, TTNCC_PUT_FAIL],
      promise: (client) => client.put(`/thanh_toan_nha_cung_cap/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [TTNCC_POST, TTNCC_POST_SUCCESS, TTNCC_POST_FAIL],
    promise: (client) => client.post('/thanh_toan_nha_cung_cap', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: TTNCC_RESET
  }
}
