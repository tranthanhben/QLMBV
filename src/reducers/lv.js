import {
  LV_LIST_LOAD,
  LV_LIST_LOAD_SUCCESS,
  LV_LIST_LOAD_FAIL,

  LV_ONE_LOAD,
  LV_ONE_LOAD_SUCCESS,
  LV_ONE_LOAD_FAIL,

  LV_POST,
  LV_POST_SUCCESS,
  LV_POST_FAIL,

  LV_PUT,
  LV_PUT_SUCCESS,
  LV_PUT_FAIL,

  LV_DELETE,
  LV_DELETE_SUCCESS,
  LV_DELETE_FAIL,

  LV_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function loaivai(state = initialState, action = {}){
  switch (action.type){
    case LV_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case LV_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case LV_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case LV_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case LV_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case LV_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case LV_POST:
      return {
        ...state,
        posting: true
      };
    case LV_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case LV_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case LV_PUT:
      return {
        ...state,
        posting: true
      };
    case LV_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case LV_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case LV_DELETE:
      return {
        ...state,
        deleting: true
      };
    case LV_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case LV_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case LV_RESET:
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
