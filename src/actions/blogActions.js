import {
  LISTBLOG_LOAD,
  LISTBLOG_LOAD_SUCCESS,
  LISTBLOG_LOAD_FAIL,
  ONEBLOG_LOAD,
  ONEBLOG_LOAD_SUCCESS,
  ONEBLOG_LOAD_FAIL,
  DEL_BLOG,
  DEL_BLOG_SUCCESS,
  DEL_BLOG_FAIL,
  POST_BLOG,
  POST_BLOG_SUCCESS,
  POST_BLOG_FAIL,
  PUT_BLOG,
  PUT_BLOG_SUCCESS,
  PUT_BLOG_FAIL,
  GET_BLOG,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  RESETBLOG
} from './actionTypes';
import {makeQuery} from '../meta'

export function loadOne(id){
  return {
    types: [ONEBLOG_LOAD, ONEBLOG_LOAD_SUCCESS, ONEBLOG_LOAD_FAIL],
    promise: (client) => client.get('/articles/'+id)
  };
}

export function delItem(id){
  return {
    types: [DEL_BLOG, DEL_BLOG_SUCCESS, DEL_BLOG_FAIL],
    promise: (client) => client.del('/articles/'+id)
  };
}

export function loadList(options = {}){
  return {
    types: [LISTBLOG_LOAD, LISTBLOG_LOAD_SUCCESS, LISTBLOG_LOAD_FAIL],
    promise: (client) => client.get('/articles',{
      params: makeQuery({
        page: options.page || 0,
        page_size : options.page_size || 10,
        title: options.title || ''
      })
    })
  };
}

export function postItem(data){
  if(data.id){
    return {
      types: [PUT_BLOG, PUT_BLOG_SUCCESS, PUT_BLOG_FAIL],
      promise: (client) => client.put(`/articles/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [POST_BLOG, POST_BLOG_SUCCESS, POST_BLOG_FAIL],
    promise: (client) => client.post('/articles', {
      data: JSON.stringify(data)
    })
  };
}



export function getItem(id){
  return {
    types: [GET_BLOG, GET_BLOG_SUCCESS, GET_BLOG_FAIL],
    promise: (client) => client.get('/articles/'+id)
  };
}

export function resetBlog(){
  return {
    type: RESETBLOG
  }
}
