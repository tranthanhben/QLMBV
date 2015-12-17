import {
  CNKH_LIST_LOAD,
  CNKH_LIST_LOAD_SUCCESS,
  CNKH_LIST_LOAD_FAIL,

  CNKH_ONE_LOAD,
  CNKH_ONE_LOAD_SUCCESS,
  CNKH_ONE_LOAD_FAIL,

  CNKH_POST,
  CNKH_POST_SUCCESS,
  CNKH_POST_FAIL,

  CNKH_PUT,
  CNKH_PUT_SUCCESS,
  CNKH_PUT_FAIL,

  CNKH_DELETE,
  CNKH_DELETE_SUCCESS,
  CNKH_DELETE_FAIL,

  CNKH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function congnoKH(state = initialState, action = {}){
  switch (action.type){
    case CNKH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case CNKH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case CNKH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.result
      };

    case CNKH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case CNKH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case CNKH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.result
      };

    case CNKH_POST:
      return {
        ...state,
        posting: true
      };
    case CNKH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case CNKH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case CNKH_PUT:
      return {
        ...state,
        posting: true
      };
    case CNKH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case CNKH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case CNKH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case CNKH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case CNKH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.result
      };

    case CNKH_RESET:
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
