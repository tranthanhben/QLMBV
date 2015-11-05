import {
  TTKH_LIST_LOAD,
  TTKH_LIST_LOAD_SUCCESS,
  TTKH_LIST_LOAD_FAIL,

  TTKH_ONE_LOAD,
  TTKH_ONE_LOAD_SUCCESS,
  TTKH_ONE_LOAD_FAIL,

  TTKH_POST,
  TTKH_POST_SUCCESS,
  TTKH_POST_FAIL,

  TTKH_PUT,
  TTKH_PUT_SUCCESS,
  TTKH_PUT_FAIL,

  TTKH_DELETE,
  TTKH_DELETE_SUCCESS,
  TTKH_DELETE_FAIL,

  TTKH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function thanhtoanKH(state = initialState, action = {}){
  switch (action.type){
    case TTKH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case TTKH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case TTKH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case TTKH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case TTKH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case TTKH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case TTKH_POST:
      return {
        ...state,
        posting: true
      };
    case TTKH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case TTKH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case TTKH_PUT:
      return {
        ...state,
        posting: true
      };
    case TTKH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case TTKH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case TTKH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case TTKH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case TTKH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case TTKH_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
  }
}
