import {
  KH_LIST_LOAD,
  KH_LIST_LOAD_SUCCESS,
  KH_LIST_LOAD_FAIL,

  KH_ONE_LOAD,
  KH_ONE_LOAD_SUCCESS,
  KH_ONE_LOAD_FAIL,

  KH_POST,
  KH_POST_SUCCESS,
  KH_POST_FAIL,

  KH_PUT,
  KH_PUT_SUCCESS,
  KH_PUT_FAIL,

  KH_DELETE,
  KH_DELETE_SUCCESS,
  KH_DELETE_FAIL,

  KH_GET,
  KH_GET_SUCCESS,
  KH_GET_FAIL,

  KH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function khachhang(state = initialState, action = {}){
  switch (action.type){
    case KH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case KH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        reloadList: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case KH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.result
      };

    case KH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case KH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case KH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.result
      };
    case KH_GET:
      return {
        ...state,
        getding: true
      };
    case KH_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result
      };
    case KH_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: {},
        error: action.result
      };

    case KH_POST:
      return {
        ...state,
        posting: true
      };
    case KH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case KH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case KH_PUT:
      return {
        ...state,
        posting: true
      };
    case KH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case KH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case KH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case KH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case KH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.result
      };

    case KH_RESET:
      return {
        ...state,
        loaded: false,
        reloadList: true,
        editItem: null,
        message: false,
        errorPost:null
      };
    default:
      return state;
  }
}
