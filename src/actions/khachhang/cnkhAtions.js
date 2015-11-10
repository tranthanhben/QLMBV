import {makeQuery} from 'meta';
import {
  CNKH_LIST_LOAD,
  CNKH_LIST_LOAD_SUCCESS,
  CNKH_LIST_LOAD_FAIL,

  CNKH_ONE_LOAD,
  CNKH_ONE_LOAD_SUCCESS,
  CNKH_ONE_LOAD_FAIL,

  CNKH_POST,
  CNKH_POST_SUCCESS,
  CNKH_POST_FAIL,

  CNKH_PUT,
  CNKH_PUT_SUCCESS,
  CNKH_PUT_FAIL,

  CNKH_DELETE,
  CNKH_DELETE_SUCCESS,
  CNKH_DELETE_FAIL,

  CNKH_RESET
} from '../actionTypes';

export function loadItem(id){
  return {
    types: [CNKH_ONE_LOAD, CNKH_ONE_LOAD_SUCCESS, CNKH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/cong_no_khach_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [CNKH_DELETE, CNKH_DELETE_SUCCESS, CNKH_DELETE_FAIL],
    promise: (client) => client.del('/cong_no_khach_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [CNKH_LIST_LOAD, CNKH_LIST_LOAD_SUCCESS, CNKH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/cong_no_khach_hang',{
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
      types: [CNKH_PUT, CNKH_PUT_SUCCESS, CNKH_PUT_FAIL],
      promise: (client) => client.put(`/cong_no_khach_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [CNKH_POST, CNKH_POST_SUCCESS, CNKH_POST_FAIL],
    promise: (client) => client.post('/cong_no_khach_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: CNCNKH_RESET
  }
}
