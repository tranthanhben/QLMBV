import {
  PXH_LIST_LOAD,
  PXH_LIST_LOAD_SUCCESS,
  PXH_LIST_LOAD_FAIL,

  PXH_ONE_LOAD,
  PXH_ONE_LOAD_SUCCESS,
  PXH_ONE_LOAD_FAIL,

  PXH_POST,
  PXH_POST_SUCCESS,
  PXH_POST_FAIL,

  PXH_PUT,
  PXH_PUT_SUCCESS,
  PXH_PUT_FAIL,

  PXH_DELETE,
  PXH_DELETE_SUCCESS,
  PXH_DELETE_FAIL,

  PXH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function phieuxuathang(state = initialState, action = {}){
  switch (action.type){
    case PXH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case PXH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case PXH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case PXH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case PXH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case PXH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case PXH_POST:
      return {
        ...state,
        posting: true
      };
    case PXH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case PXH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PXH_PUT:
      return {
        ...state,
        posting: true
      };
    case PXH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case PXH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PXH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case PXH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case PXH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case PXH_RESET:
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
