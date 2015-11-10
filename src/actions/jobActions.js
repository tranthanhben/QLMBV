import {makeQuery} from 'meta';
import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL,
  DEL_JOB,
  DEL_JOB_SUCCESS,
  DEL_JOB_FAIL,
  POST_JOB,
  POST_JOB_SUCCESS,
  POST_JOB_FAIL,
  PUT_JOB,
  PUT_JOB_SUCCESS,
  PUT_JOB_FAIL,
  GET_JOB,
  GET_JOB_SUCCESS,
  GET_JOB_FAIL,
  RESETJOB
} from './actionTypes';

export function loadOne(id){
  return {
    types: [ONEJOB_LOAD, ONEJOB_LOAD_SUCCESS, ONEJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs/'+id)
  };
}

export function delJob(id){
  return {
    types: [DEL_JOB, DEL_JOB_SUCCESS, DEL_JOB_FAIL],
    promise: (client) => client.del('/jobs/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LISTJOB_LOAD, LISTJOB_LOAD_SUCCESS, LISTJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        title: options.title || ''
      })
    })
  };
}

export function postJob(data){
  if(data.id){
    return {
      types: [PUT_JOB, PUT_JOB_SUCCESS, PUT_JOB_FAIL],
      promise: (client) => client.put(`/jobs/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [POST_JOB, POST_JOB_SUCCESS, POST_JOB_FAIL],
    promise: (client) => client.post('/jobs', {
      data: JSON.stringify(data)
    })
  };
}

export function getJob(id){
  return {
    types: [GET_JOB, GET_JOB_SUCCESS, GET_JOB_FAIL],
    promise: (client) => client.get('/jobs/'+id)
  };
}

export function resetJob(){
  return {
    type: RESETJOB
  }
}
