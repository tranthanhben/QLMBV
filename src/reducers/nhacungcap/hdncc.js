import {
  HDNCC_LIST_LOAD,
  HDNCC_LIST_LOAD_SUCCESS,
  HDNCC_LIST_LOAD_FAIL,

  HDNCC_ONE_LOAD,
  HDNCC_ONE_LOAD_SUCCESS,
  HDNCC_ONE_LOAD_FAIL,

  HDNCC_POST,
  HDNCC_POST_SUCCESS,
  HDNCC_POST_FAIL,

  HDNCC_PUT,
  HDNCC_PUT_SUCCESS,
  HDNCC_PUT_FAIL,

  HDNCC_DELETE,
  HDNCC_DELETE_SUCCESS,
  HDNCC_DELETE_FAIL,

  HDNCC_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function hoadonNCC(state = initialState, action = {}){
  switch (action.type){
    case HDNCC_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case HDNCC_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case HDNCC_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case HDNCC_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case HDNCC_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case HDNCC_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case HDNCC_POST:
      return {
        ...state,
        posting: true
      };
    case HDNCC_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case HDNCC_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case HDNCC_PUT:
      return {
        ...state,
        posting: true
      };
    case HDNCC_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case HDNCC_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case HDNCC_DELETE:
      return {
        ...state,
        deleting: true
      };
    case HDNCC_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case HDNCC_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case HDNCC_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
    default:
      return state;
  }
}
