import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  LIST_IMAGE,
  LIST_IMAGE_SUCCESS,
  LIST_IMAGE_FAIL,
  SELECT_IMAGE,
  SELECT_IMAGE_SUCCESS,
  SELECT_IMAGE_FAIL
} from './actionTypes';
import {makeQuery} from '../meta'

export function postFile(file){
  let data = new FormData();
  data.append('file', file);
  data.append('type', 'image');
  return {
    types: [UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAIL],
    promise: (client) => client.post('/upload/', {
      data: data
    })
  }
}

export function loadList(options = {}){
  return {
    types: [LIST_IMAGE, LIST_IMAGE_SUCCESS, LIST_IMAGE_FAIL],
    promise: (client) => client.get('/image/',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 100,
        name: options.name || '',
        type: options.type || 'image'
      })
    })
  };
}

export function selectImage(id){
  return {
    types: [SELECT_IMAGE, SELECT_IMAGE_SUCCESS, SELECT_IMAGE_FAIL],
    promise: (client) => client.get('/image/'+id)
  }
}
