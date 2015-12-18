import {makeQuery} from 'meta';
import {
  HDNCC_LIST_LOAD,
  HDNCC_LIST_LOAD_SUCCESS,
  HDNCC_LIST_LOAD_FAIL,

  HDNCC_ONE_LOAD,
  HDNCC_ONE_LOAD_SUCCESS,
  HDNCC_ONE_LOAD_FAIL,

  HDNCC_POST,
  HDNCC_POST_SUCCESS,
  HDNCC_POST_FAIL,

  HDNCC_PUT,
  HDNCC_PUT_SUCCESS,
  HDNCC_PUT_FAIL,

  HDNCC_DELETE,
  HDNCC_DELETE_SUCCESS,
  HDNCC_DELETE_FAIL,

  HDNCC_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [HDNCC_ONE_LOAD, HDNCC_ONE_LOAD_SUCCESS, HDNCC_ONE_LOAD_FAIL],
    promise: (client) => client.get('/hoa_don_nha_cung_cap/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [HDNCC_DELETE, HDNCC_DELETE_SUCCESS, HDNCC_DELETE_FAIL],
    promise: (client) => client.del('/hoa_don_nha_cung_cap/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [HDNCC_LIST_LOAD, HDNCC_LIST_LOAD_SUCCESS, HDNCC_LIST_LOAD_FAIL],
    promise: (client) => client.get('/hoa_don_nha_cung_cap',{
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
      types: [HDNCC_PUT, HDNCC_PUT_SUCCESS, HDNCC_PUT_FAIL],
      promise: (client) => client.put(`/hoa_don_nha_cung_cap/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [HDNCC_POST, HDNCC_POST_SUCCESS, HDNCC_POST_FAIL],
    promise: (client) => client.post('/hoa_don_nha_cung_cap', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: HDNCC_RESET
  }
}
export function isLoaded(globalState) {
  return globalState.hoadonNCC && globalState.hoadonNCC.loaded;
}
