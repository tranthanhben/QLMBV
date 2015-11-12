import {
  LH_LIST_LOAD,
  LH_LIST_LOAD_SUCCESS,
  LH_LIST_LOAD_FAIL,

  LH_ONE_LOAD,
  LH_ONE_LOAD_SUCCESS,
  LH_ONE_LOAD_FAIL,

  LH_POST,
  LH_POST_SUCCESS,
  LH_POST_FAIL,

  LH_PUT,
  LH_PUT_SUCCESS,
  LH_PUT_FAIL,

  LH_DELETE,
  LH_DELETE_SUCCESS,
  LH_DELETE_FAIL,

  LH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function lohang(state = initialState, action = {}){
  switch (action.type){
    case LH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case LH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case LH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case LH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case LH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case LH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case LH_POST:
      return {
        ...state,
        posting: true
      };
    case LH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case LH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case LH_PUT:
      return {
        ...state,
        posting: true
      };
    case LH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case LH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case LH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case LH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case LH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case LH_RESET:
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
