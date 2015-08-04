import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL
} from './actionTypes';


export function loadOne(id){
  return {
    types: [ONEJOB_LOAD, ONEJOB_LOAD_SUCCESS, ONEJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs/'+id)
  };
}

export function delItem(id){
  return {
    types: [ONEJOB_LOAD, ONEJOB_LOAD_SUCCESS, ONEJOB_LOAD_FAIL],
    promise: (client) => client.del('/jobs/'+id)
  };
}

export function loadList(){
  return {
    types: [LISTJOB_LOAD, LISTJOB_LOAD_SUCCESS, LISTJOB_LOAD_FAIL],
    promise: (client) => client.get('/jobs')
  };
}
