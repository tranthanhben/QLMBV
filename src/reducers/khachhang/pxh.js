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

  PXH_CTK,
  PXH_CTK_SUCCESS,
  PXH_CTK_FAIL,

  PXH_GET,
  PXH_GET_SUCCESS,
  PXH_GET_FAIL,

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
        reloadList: false,
        list: action.result.items,
        paging: action.result.paging
      };
    case PXH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: {},
        error: action.result
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
        item: {},
        error: action.result
      };

    case PXH_GET:
      return {
        ...state,
        getding: true
      };
    case PXH_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result,
        ctk: action.result.chitietkho
      };
    case PXH_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: null,
        error: action.result
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
        errorPost: action.result
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
        reloadList: true,
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
        errorPost: action.result
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
        reloadList: true,
        deleting: false,
        item: null
      };
    case PXH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.result
      };
    case PXH_CTK:
      return {
        ...state,
        postingCTK: true
      };
    case PXH_CTK_SUCCESS:
      return {
        ...state,
        postingCTK: false,
        reloadList: true,
        ctk: action.result,
      };
    case PXH_CTK_FAIL:
      return {
        ...state,
        postingCTK: false,
        ctk: null,
        errorPost: action.result
      };
    case PXH_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        reloadList: true,
        message: false,
        errorPost:null
      };
    default:
      return state;
  }
}
