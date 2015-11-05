import {
  PDH_LIST_LOAD,
  PDH_LIST_LOAD_SUCCESS,
  PDH_LIST_LOAD_FAIL,

  PDH_ONE_LOAD,
  PDH_ONE_LOAD_SUCCESS,
  PDH_ONE_LOAD_FAIL,

  PDH_POST,
  PDH_POST_SUCCESS,
  PDH_POST_FAIL,

  PDH_PUT,
  PDH_PUT_SUCCESS,
  PDH_PUT_FAIL,

  PDH_DELETE,
  PDH_DELETE_SUCCESS,
  PDH_DELETE_FAIL,

  PDH_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [PDH_ONE_LOAD, PDH_ONE_LOAD_SUCCESS, PDH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/phieu_dat_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [PDH_DELETE, PDH_DELETE_SUCCESS, PDH_DELETE_FAIL],
    promise: (client) => client.del('/phieu_dat_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [PDH_LIST_LOAD, PDH_LIST_LOAD_SUCCESS, PDH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/phieu_dat_hang',{
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
      types: [PDH_PUT, PDH_PUT_SUCCESS, PDH_PUT_FAIL],
      promise: (client) => client.put(`/phieu_dat_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [PDH_POST, PDH_POST_SUCCESS, PDH_POST_FAIL],
    promise: (client) => client.post('/phieu_dat_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: PDH_RESET
  }
}
