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
} from '../actions/actionTypes';
const metaBlog = {
    "title": {
        "label": "Title",
        "name": "title",
        "required": true,
        "type": "single"
    },
    "avatar": {
        "label": "Avatar",
        "name": "avatar",
        "required": true,
        "type": "single"
    },
    "content": {
        "label": "Content",
        "name": "content",
        "required": false,
        "type": "md"
    }
}

const initialState = {
  loaded: false,
  metaBlog: metaBlog
};
export default function blog(state = initialState, action = {}) {
    switch (action.type) {
      case LISTBLOG_LOAD:
        return {
          ...state,
          loadingList: true
        };
      case LISTBLOG_LOAD_SUCCESS:
        return {
          ...state,
          loadingList: false,
          reloadList: false,
          loaded: true,
          list: action.result.items,
          paging: action.result.paging
        };
      case LISTBLOG_LOAD_FAIL:
        return {
          ...state,
          loadingList: false,
          loaded: false,
          list:[],
          paging:null,
          error: action.error
        };
      case ONEBLOG_LOAD:
        return {
          ...state,
          loadingOne: true
        };
      case ONEBLOG_LOAD_SUCCESS:
        return {
          ...state,
          loadingOne: false,
          item: action.result
        };
      case ONEBLOG_LOAD_FAIL:
        return {
          ...state,
          loadingOne: false,
          item:null,
          error: action.error
        };
      case DEL_BLOG:
        return {
          ...state,
          loadingOne: true
        };
      case DEL_BLOG_SUCCESS:
        return {
          ...state,
          reloadList: true,
          loadingOne: false,
          item: null
        };
      case DEL_BLOG_FAIL:
        return {
          ...state,
          loadingOne: false,
          item: null,
          errorDel: action.error
        };
      case POST_BLOG:
        return {
          ...state,
          postLoading: true
        };
      case POST_BLOG_SUCCESS:
        alert("Create Success!");
        location.assign("/blog/"+action.result.id);
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case POST_BLOG_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostBlog: action.error
        };
      case PUT_BLOG:
        return {
          ...state,
          postLoading: true
        };
      case PUT_BLOG_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case PUT_BLOG_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostBlog: action.error
        };
      case GET_BLOG:
        return {
          ...state,
          getLoading: true
        };
      case GET_BLOG_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          getLoading: false,
        };
      case GET_BLOG_FAIL:
        return {
          ...state,
          editItem: null,
          getLoading: false,
          errorGetBlog: action.error
        }
      case RESETBLOG:
        return {
          ...state,
          loaded: false,
          editItem: null,
          message: false,
          errorPostBlog: null,
          errorGetBlog: null
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.blog && globalState.blog.loaded;
}
