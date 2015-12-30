import {
  NV_LIST_LOAD,
  NV_LIST_LOAD_SUCCESS,
  NV_LIST_LOAD_FAIL,

  NV_LIST_PB,
  NV_LIST_PB_SUCCESS,
  NV_LIST_PB_FAIL,

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

  NV_GET,
  NV_GET_SUCCESS,
  NV_GET_FAIL,

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
        loading: false,
        loaded: true,
        list: action.result.items,
        reloadList: false,
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
    case NV_LIST_PB:
      return {
        ...state,
        loadingPB: true
      };
    case NV_LIST_PB_SUCCESS:
      return {
        ...state,
        loadingPB: false,
        loaded: true,
        listPB: action.result.items,
      };
    case NV_LIST_PB_FAIL:
      return {
        ...state,
        loadingPB: false,
        loaded: false,
        listPB: [],
        errorPB: action.error
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
    case NV_GET:
      return {
        ...state,
        getding: true
      };
    case NV_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result
      };
    case NV_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: {},
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
        reloadList: true,
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
        reloadList: true,
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
        reloadList: true,
        message: false,
        errorPost:null
      };
    default:
      return state;
  }
}
