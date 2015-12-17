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

  PMH_CTDH,
  PMH_CTDH_SUCCESS,
  PMH_CTDH_FAIL,

  PMH_GET,
  PMH_GET_SUCCESS,
  PMH_GET_FAIL,

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
        reloadList: false,
        list: action.result.items,
        paging: action.result.paging
      };
    case PMH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: {},
        error: action.result
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
        item: {},
        error: action.result
      };

    case PMH_GET:
      return {
        ...state,
        getding: true
      };
    case PMH_GET_SUCCESS:
      return {
        ...state,
        getding: false,
        editItem: action.result,
        ctdh: action.result.chitietdonhang
      };
    case PMH_GET_FAIL:
      return {
        ...state,
        getding: false,
        editItem: null,
        error: action.result
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
        errorPost: action.result
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
        errorPost: action.result
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
        errorDel: action.result
      };
    case PMH_CTDH:
      return {
        ...state,
        postingCTDH: true
      };
    case PMH_CTDH_SUCCESS:
      return {
        ...state,
        postingCTDH: false,
        ctdh: action.result,
      };
    case PMH_CTDH_FAIL:
      return {
        ...state,
        postingCTDH: false,
        ctdh: null,
        errorPost: action.result
      };
    case PMH_RESET:
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
