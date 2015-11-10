import {
  KHO_LIST_LOAD,
  KHO_LIST_LOAD_SUCCESS,
  KHO_LIST_LOAD_FAIL,

  KHO_ONE_LOAD,
  KHO_ONE_LOAD_SUCCESS,
  KHO_ONE_LOAD_FAIL,

  KHO_POST,
  KHO_POST_SUCCESS,
  KHO_POST_FAIL,

  KHO_PUT,
  KHO_PUT_SUCCESS,
  KHO_PUT_FAIL,

  KHO_DELETE,
  KHO_DELETE_SUCCESS,
  KHO_DELETE_FAIL,

  KHO_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function kho(state = initialState, action = {}){
  switch (action.type){
    case KHO_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case KHO_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case KHO_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case KHO_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case KHO_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case KHO_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case KHO_POST:
      return {
        ...state,
        posting: true
      };
    case KHO_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case KHO_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case KHO_PUT:
      return {
        ...state,
        posting: true
      };
    case KHO_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case KHO_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case KHO_DELETE:
      return {
        ...state,
        deleting: true
      };
    case KHO_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case KHO_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case KHO_RESET:
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
