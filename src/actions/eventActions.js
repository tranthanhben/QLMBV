import {
  LISTEVENT_LOAD,
  LISTEVENT_LOAD_SUCCESS,
  LISTEVENT_LOAD_FAIL,
  ONEEVENT_LOAD,
  ONEEVENT_LOAD_SUCCESS,
  ONEEVENT_LOAD_FAIL,
  DEL_EVENT,
  DEL_EVENT_SUCCESS,
  DEL_EVENT_FAIL,
  POST_EVENT,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAIL,
  PUT_EVENT,
  PUT_EVENT_SUCCESS,
  PUT_EVENT_FAIL,
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  RESETEVENT
} from './actionTypes';
import {makeQuery} from '../meta'

export function loadOne(id){
  return {
    types: [ONEEVENT_LOAD, ONEEVENT_LOAD_SUCCESS, ONEEVENT_LOAD_FAIL],
    promise: (client) => client.get('/events/'+id)
  };
}

export function delItem(id){
  return {
    types: [DEL_EVENT, DEL_EVENT_SUCCESS, DEL_EVENT_FAIL],
    promise: (client) => client.del('/events/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LISTEVENT_LOAD, LISTEVENT_LOAD_SUCCESS, LISTEVENT_LOAD_FAIL],
    promise: (client) => client.get('/events',{
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
      types: [PUT_EVENT, PUT_EVENT_SUCCESS, PUT_EVENT_FAIL],
      promise: (client) => client.put(`/events/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [POST_EVENT, POST_EVENT_SUCCESS, POST_EVENT_FAIL],
    promise: (client) => client.post('/events', {
      data: JSON.stringify(data)
    })
  };
}



export function getItem(id){
  return {
    types: [GET_EVENT, GET_EVENT_SUCCESS, GET_EVENT_FAIL],
    promise: (client) => client.get('/events/'+id)
  };
}

export function resetEvent(){
  return {
    type: RESETEVENT
  }
}
