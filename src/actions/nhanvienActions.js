import {
  NV_LIST_LOAD,
  NV_LIST_LOAD_SUCCESS,
  NV_LIST_LOAD_FAIL,

  NV_ONE_LOAD,
  NV_ONE_LOAD_SUCCESS,
  NV_ONE_LOAD_FAIL,

  NV_POST,
  NV_POST_SUCCESS,
  NV_POST_FAIL,

  NV_PUT,
  NV_PUT_SUCCESS,
  NV_PUT_FAIL,

  NV_DELETE,
  NV_DELETE_SUCCESS,
  NV_DELETE_FAIL,

  NV_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [NV_ONE_LOAD, NV_ONE_LOAD_SUCCESS, NV_ONE_LOAD_FAIL],
    promise: (client) => client.get('/nhan_vien/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [NV_DELETE, NV_DELETE_SUCCESS, NV_DELETE_FAIL],
    promise: (client) => client.del('/nhan_vien/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [NV_LIST_LOAD, NV_LIST_LOAD_SUCCESS, NV_LIST_LOAD_FAIL],
    promise: (client) => client.get('/nhan_vien',{
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
      types: [NV_PUT, NV_PUT_SUCCESS, NV_PUT_FAIL],
      promise: (client) => client.put(`/nhan_vien/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [NV_POST, NV_POST_SUCCESS, NV_POST_FAIL],
    promise: (client) => client.post('/nhan_vien', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: NV_RESET
  }
}
