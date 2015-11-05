import {
  HDKH_LIST_LOAD,
  HDKH_LIST_LOAD_SUCCESS,
  HDKH_LIST_LOAD_FAIL,

  HDKH_ONE_LOAD,
  HDKH_ONE_LOAD_SUCCESS,
  HDKH_ONE_LOAD_FAIL,

  HDKH_POST,
  HDKH_POST_SUCCESS,
  HDKH_POST_FAIL,

  HDKH_PUT,
  HDKH_PUT_SUCCESS,
  HDKH_PUT_FAIL,

  HDKH_DELETE,
  HDKH_DELETE_SUCCESS,
  HDKH_DELETE_FAIL,

  HDKH_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [HDKH_ONE_LOAD, HDKH_ONE_LOAD_SUCCESS, HDKH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/hoa_don_khach_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [HDKH_DELETE, HDKH_DELETE_SUCCESS, HDKH_DELETE_FAIL],
    promise: (client) => client.del('/hoa_don_khach_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [HDKH_LIST_LOAD, HDKH_LIST_LOAD_SUCCESS, HDKH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/hoa_don_khach_hang',{
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
      types: [HDKH_PUT, HDKH_PUT_SUCCESS, HDKH_PUT_FAIL],
      promise: (client) => client.put(`/hoa_don_khach_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [HDKH_POST, HDKH_POST_SUCCESS, HDKH_POST_FAIL],
    promise: (client) => client.post('/hoa_don_khach_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: HDKH_RESET
  }
}
