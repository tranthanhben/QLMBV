import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL,
  DEL_ITEM,
  DEL_ITEM_SUCCESS,
  DEL_ITEM_FAIL,
  POST_ITEM,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAIL,
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  RESETDATA
} from './actionTypes';
import {makeQuery} from '../meta'

export function loadOne(id){
  return {
    types: [ONEJOB_LOAD, ONEJOB_LOAD_SUCCESS, ONEJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs/'+id)
  };
}

export function delItem(id){
  return {
    types: [DEL_ITEM, DEL_ITEM_SUCCESS, DEL_ITEM_FAIL],
    promise: (client) => client.del('/jobs/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LISTJOB_LOAD, LISTJOB_LOAD_SUCCESS, LISTJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs',{
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
      types: [POST_ITEM, POST_ITEM_SUCCESS, POST_ITEM_FAIL],
      promise: (client) => client.put(`/jobs/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [POST_ITEM, POST_ITEM_SUCCESS, POST_ITEM_FAIL],
    promise: (client) => client.post('/jobs', {
      data: JSON.stringify(data)
    })
  };
}

export function getItem(id){
  return {
    types: [GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_FAIL],
    promise: (client) => client.get('/jobs/'+id)
  };
}

export function resetData(){
  return {
    type: RESETDATA
  }
}
