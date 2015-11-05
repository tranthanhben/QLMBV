import {
  LH_LIST_LOAD,
  LH_LIST_LOAD_SUCCESS,
  LH_LIST_LOAD_FAIL,

  LH_ONE_LOAD,
  LH_ONE_LOAD_SUCCESS,
  LH_ONE_LOAD_FAIL,

  LH_POST,
  LH_POST_SUCCESS,
  LH_POST_FAIL,

  LH_PUT,
  LH_PUT_SUCCESS,
  LH_PUT_FAIL,

  LH_DELETE,
  LH_DELETE_SUCCESS,
  LH_DELETE_FAIL,

  LH_RESET
} from './actionTypes';

export function loadItem(id){
  return {
    types: [LH_ONE_LOAD, LH_ONE_LOAD_SUCCESS, LH_ONE_LOAD_FAIL],
    promise: (client) => client.get('/lo_hang/'+id)
  };
}

export function deleteItem(id){
  return {
    types: [LH_DELETE, LH_DELETE_SUCCESS, LH_DELETE_FAIL],
    promise: (client) => client.del('/lo_hang/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LH_LIST_LOAD, LH_LIST_LOAD_SUCCESS, LH_LIST_LOAD_FAIL],
    promise: (client) => client.get('/lo_hang',{
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
      types: [LH_PUT, LH_PUT_SUCCESS, LH_PUT_FAIL],
      promise: (client) => client.put(`/lo_hang/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [LH_POST, LH_POST_SUCCESS, LH_POST_FAIL],
    promise: (client) => client.post('/lo_hang', {
      data: JSON.stringify(data)
    })
  };
}

export function reset(){
  return {
    type: LH_RESET
  }
}
