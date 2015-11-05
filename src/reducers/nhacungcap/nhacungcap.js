import {
  NCC_LIST_LOAD,
  NCC_LIST_LOAD_SUCCESS,
  NCC_LIST_LOAD_FAIL,

  NCC_ONE_LOAD,
  NCC_ONE_LOAD_SUCCESS,
  NCC_ONE_LOAD_FAIL,

  NCC_POST,
  NCC_POST_SUCCESS,
  NCC_POST_FAIL,

  NCC_PUT,
  NCC_PUT_SUCCESS,
  NCC_PUT_FAIL,

  NCC_DELETE,
  NCC_DELETE_SUCCESS,
  NCC_DELETE_FAIL,

  NCC_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function nhacungcap(state = initialState, action = {}){
  switch (action.type){
    case NCC_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case NCC_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case NCC_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case NCC_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case NCC_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case NCC_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case NCC_POST:
      return {
        ...state,
        posting: true
      };
    case NCC_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case NCC_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case NCC_PUT:
      return {
        ...state,
        posting: true
      };
    case NCC_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case NCC_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case NCC_DELETE:
      return {
        ...state,
        deleting: true
      };
    case NCC_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case NCC_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case NCC_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
  }
}
