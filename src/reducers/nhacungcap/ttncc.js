import {
  TTNCC_LIST_LOAD,
  TTNCC_LIST_LOAD_SUCCESS,
  TTNCC_LIST_LOAD_FAIL,

  TTNCC_ONE_LOAD,
  TTNCC_ONE_LOAD_SUCCESS,
  TTNCC_ONE_LOAD_FAIL,

  TTNCC_POST,
  TTNCC_POST_SUCCESS,
  TTNCC_POST_FAIL,

  TTNCC_PUT,
  TTNCC_PUT_SUCCESS,
  TTNCC_PUT_FAIL,

  TTNCC_DELETE,
  TTNCC_DELETE_SUCCESS,
  TTNCC_DELETE_FAIL,

  TTNCC_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function thanhtoanNCC(state = initialState, action = {}){
  switch (action.type){
    case TTNCC_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case TTNCC_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case TTNCC_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case TTNCC_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case TTNCC_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case TTNCC_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case TTNCC_POST:
      return {
        ...state,
        posting: true
      };
    case TTNCC_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case TTNCC_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case TTNCC_PUT:
      return {
        ...state,
        posting: true
      };
    case TTNCC_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case TTNCC_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case TTNCC_DELETE:
      return {
        ...state,
        deleting: true
      };
    case TTNCC_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case TTNCC_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case TTNCC_RESET:
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
