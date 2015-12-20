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

  TTKH_CTTT,
  TTKH_CTTT_SUCCESS,
  TTKH_CTTT_FAIL,

  TTKH_GET,
  TTKH_GET_SUCCESS,
  TTKH_GET_FAIL,

  GD_DEL_CTTT_SUCCESS,
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
        reloadList: false,
        list: action.result.items,
        paging: action.result.paging
      };
    case TTKH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: {},
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
        item: {},
        error: action.error
      };

    case TTKH_GET:
      return {
        ...state,
        getding: true
      };
    case TTKH_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result,
        cttt: action.result.chitietthanhtoan
      };
    case TTKH_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: null,
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
        reloadList: true,
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
        reloadList: true,
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
    case TTKH_CTTT:
      return {
        ...state,
        postingCTTT: true
      };
    case TTKH_CTTT_SUCCESS:
      return {
        ...state,
        postingCTTT: false,
        reloadList: true,
        cttt: action.result,
      };
    case TTKH_CTTT_FAIL:
      return {
        ...state,
        postingCTTT: false,
        cttt: null,
        errorPost: action.error
      };
    case TTKH_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        reloadList: true,
        message: false,
        errorPost:null,
        cttt: null
      };
    case GD_DEL_CTTT_SUCCESS:
      return {
        ...state,
        reloadList: true
      };
    default:
      return state;
  }
}
