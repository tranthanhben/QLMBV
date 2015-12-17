import {
  PNH_LIST_LOAD,
  PNH_LIST_LOAD_SUCCESS,
  PNH_LIST_LOAD_FAIL,

  PNH_ONE_LOAD,
  PNH_ONE_LOAD_SUCCESS,
  PNH_ONE_LOAD_FAIL,

  PNH_POST,
  PNH_POST_SUCCESS,
  PNH_POST_FAIL,

  PNH_PUT,
  PNH_PUT_SUCCESS,
  PNH_PUT_FAIL,

  PNH_DELETE,
  PNH_DELETE_SUCCESS,
  PNH_DELETE_FAIL,

  PNH_CTK,
  PNH_CTK_SUCCESS,
  PNH_CTK_FAIL,

  PNH_GET,
  PNH_GET_SUCCESS,
  PNH_GET_FAIL,

  PNH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function phieudathang(state = initialState, action = {}){
  switch (action.type){
    case PNH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case PNH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        reloadList: false,
        list: action.result.items,
        paging: action.result.paging
      };
    case PNH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: {},
        error: action.result
      };

    case PNH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case PNH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case PNH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: {},
        error: action.result
      };

    case PNH_GET:
      return {
        ...state,
        getding: true
      };
    case PNH_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result,
        ctk: action.result.chitietkho
      };
    case PNH_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: null,
        error: action.result
      };

    case PNH_POST:
      return {
        ...state,
        posting: true
      };
    case PNH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case PNH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case PNH_PUT:
      return {
        ...state,
        posting: true
      };
    case PNH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        reloadList: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case PNH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.result
      };

    case PNH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case PNH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        reloadList: true,
        deleting: false,
        item: null
      };
    case PNH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.result
      };
    case PNH_CTK:
      return {
        ...state,
        postingCTK: true
      };
    case PNH_CTK_SUCCESS:
      return {
        ...state,
        postingCTK: false,
        reloadList: true,
        ctk: action.result,
      };
    case PNH_CTK_FAIL:
      return {
        ...state,
        postingCTK: false,
        ctk: null,
        errorPost: action.result
      };
    case PNH_RESET:
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
