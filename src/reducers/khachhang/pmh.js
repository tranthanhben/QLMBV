import {
  PMH_LIST_LOAD,
  PMH_LIST_LOAD_SUCCESS,
  PMH_LIST_LOAD_FAIL,

  PMH_ONE_LOAD,
  PMH_ONE_LOAD_SUCCESS,
  PMH_ONE_LOAD_FAIL,

  PMH_POST,
  PMH_POST_SUCCESS,
  PMH_POST_FAIL,

  PMH_PUT,
  PMH_PUT_SUCCESS,
  PMH_PUT_FAIL,

  PMH_DELETE,
  PMH_DELETE_SUCCESS,
  PMH_DELETE_FAIL,

  PMH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function phieumuahang(state = initialState, action = {}){
  switch (action.type){
    case PMH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case PMH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case PMH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case PMH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case PMH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case PMH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case PMH_POST:
      return {
        ...state,
        posting: true
      };
    case PMH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case PMH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PMH_PUT:
      return {
        ...state,
        posting: true
      };
    case PMH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case PMH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PMH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case PMH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case PMH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case PMH_RESET:
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
