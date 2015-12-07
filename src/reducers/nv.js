import {
  NV_LIST_LOAD,
  NV_LIST_LOAD_SUCCESS,
  NV_LIST_LOAD_FAIL,

  NV_ONE_LOAD,
  NV_ONE_LOAD_SUCCESS,
  NV_ONE_LOAD_FAIL,

  NV_POST,
  NV_POST_SUCCESS,
  NV_POST_FAIL,

  NV_PUT,
  NV_PUT_SUCCESS,
  NV_PUT_FAIL,

  NV_DELETE,
  NV_DELETE_SUCCESS,
  NV_DELETE_FAIL,

  NV_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function nhanvien(state = initialState, action = {}){
  switch (action.type){
    case NV_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case NV_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case NV_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case NV_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case NV_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case NV_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case NV_POST:
      return {
        ...state,
        posting: true
      };
    case NV_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case NV_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case NV_PUT:
      return {
        ...state,
        posting: true
      };
    case NV_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case NV_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case NV_DELETE:
      return {
        ...state,
        deleting: true
      };
    case NV_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case NV_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case NV_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        message: false,
        errorPost:null
      };
    default:
      return state;
  }
}
