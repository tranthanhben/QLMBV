import {
  LIST_APPLY_LOAD,
  LIST_APPLY_LOAD_SUCCESS,
  LIST_APPLY_LOAD_FAIL,
  ONE_APPLY_LOAD,
  ONE_APPLY_LOAD_SUCCESS,
  ONE_APPLY_LOAD_FAIL,
  DEL_APPLY,
  DEL_APPLY_SUCCESS,
  DEL_APPLY_FAIL,
  POST_APPLY,
  POST_APPLY_SUCCESS,
  POST_APPLY_FAIL,
  PUT_APPLY,
  PUT_APPLY_SUCCESS,
  PUT_APPLY_FAIL,
  GET_APPLY,
  GET_APPLY_SUCCESS,
  GET_APPLY_FAIL,
  RESET_APPLY
} from './actionTypes';
import {makeQuery} from '../meta'

export function loadOne(id){
  return {
    types: [ONE_APPLY_LOAD, ONE_APPLY_LOAD_SUCCESS, ONE_APPLY_LOAD_FAIL],
    promise: (client) => client.get('/applies/'+id)
  };
}

export function delItem(id){
  return {
    types: [DEL_APPLY, DEL_APPLY_SUCCESS, DEL_APPLY_FAIL],
    promise: (client) => client.del('/applies/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LIST_APPLY_LOAD, LIST_APPLY_LOAD_SUCCESS, LIST_APPLY_LOAD_FAIL],
    promise: (client) => client.get('/applies',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page || 10,
        title: options.title || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [PUT_APPLY, PUT_APPLY_SUCCESS, PUT_APPLY_FAIL],
      promise: (client) => client.put(`/applies/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [POST_APPLY, POST_APPLY_SUCCESS, POST_APPLY_FAIL],
    promise: (client) => client.post('/applies', {
      data: JSON.stringify(data)
    })
  };
}



export function getItem(id){
  return {
    types: [GET_APPLY, GET_APPLY_SUCCESS, GET_APPLY_FAIL],
    promise: (client) => client.get('/applies/'+id)
  };
}

export function resetApply(){
  return {
    type: RESET_APPLY
  }
}
