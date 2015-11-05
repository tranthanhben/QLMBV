import {
  HDKH_LIST_LOAD,
  HDKH_LIST_LOAD_SUCCESS,
  HDKH_LIST_LOAD_FAIL,

  HDKH_ONE_LOAD,
  HDKH_ONE_LOAD_SUCCESS,
  HDKH_ONE_LOAD_FAIL,

  HDKH_POST,
  HDKH_POST_SUCCESS,
  HDKH_POST_FAIL,

  HDKH_PUT,
  HDKH_PUT_SUCCESS,
  HDKH_PUT_FAIL,

  HDKH_DELETE,
  HDKH_DELETE_SUCCESS,
  HDKH_DELETE_FAIL,

  HDKH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function hoadonKH(state = initialState, action = {}){
  switch (action.type){
    case HDKH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case HDKH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case HDKH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case HDKH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case HDKH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case HDKH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case HDKH_POST:
      return {
        ...state,
        posting: true
      };
    case HDKH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case HDKH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case HDKH_PUT:
      return {
        ...state,
        posting: true
      };
    case HDKH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case HDKH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case HDKH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case HDKH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case HDKH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case HDKH_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
  }
}
