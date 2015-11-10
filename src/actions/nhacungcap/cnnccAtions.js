import {makeQuery} from 'meta';
import {
  CNNCC_LIST_LOAD,
  CNNCC_LIST_LOAD_SUCCESS,
  CNNCC_LIST_LOAD_FAIL,

  CNNCC_ONE_LOAD,
  CNNCC_ONE_LOAD_SUCCESS,
  CNNCC_ONE_LOAD_FAIL,

  CNNCC_POST,
  CNNCC_POST_SUCCESS,
  CNNCC_POST_FAIL,

  CNNCC_PUT,
  CNNCC_PUT_SUCCESS,
  CNNCC_PUT_FAIL,

  CNNCC_DELETE,
  CNNCC_DELETE_SUCCESS,
  CNNCC_DELETE_FAIL,

  CNNCC_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [CNNCC_ONE_LOAD, CNNCC_ONE_LOAD_SUCCESS, CNNCC_ONE_LOAD_FAIL],
    promise: (client) => client.get('/cong_no_nha_cung_cap/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [CNNCC_DELETE, CNNCC_DELETE_SUCCESS, CNNCC_DELETE_FAIL],
    promise: (client) => client.del('/cong_no_nha_cung_cap/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [CNNCC_LIST_LOAD, CNNCC_LIST_LOAD_SUCCESS, CNNCC_LIST_LOAD_FAIL],
    promise: (client) => client.get('/cong_no_nha_cung_cap',{
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
      types: [CNNCC_PUT, CNNCC_PUT_SUCCESS, CNNCC_PUT_FAIL],
      promise: (client) => client.put(`/cong_no_nha_cung_cap/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [CNNCC_POST, CNNCC_POST_SUCCESS, CNNCC_POST_FAIL],
    promise: (client) => client.post('/cong_no_nha_cung_cap', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: RESETBLOG
  }
}
