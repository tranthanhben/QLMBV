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

  TTKH_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [TTKH_ONE_LOAD, TTKH_ONE_LOAD_SUCCESS, TTKH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/thanh_toan_khach_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [TTKH_DELETE, TTKH_DELETE_SUCCESS, TTKH_DELETE_FAIL],
    promise: (client) => client.del('/thanh_toan_khach_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [TTKH_LIST_LOAD, TTKH_LIST_LOAD_SUCCESS, TTKH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/thanh_toan_khach_hang',{
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
      types: [TTKH_PUT, TTKH_PUT_SUCCESS, TTKH_PUT_FAIL],
      promise: (client) => client.put(`/thanh_toan_khach_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [TTKH_POST, TTKH_POST_SUCCESS, TTKH_POST_FAIL],
    promise: (client) => client.post('/thanh_toan_khach_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: TTKH_RESET
  }
}
