import {
  PDH_LIST_LOAD,
  PDH_LIST_LOAD_SUCCESS,
  PDH_LIST_LOAD_FAIL,

  PDH_ONE_LOAD,
  PDH_ONE_LOAD_SUCCESS,
  PDH_ONE_LOAD_FAIL,

  PDH_POST,
  PDH_POST_SUCCESS,
  PDH_POST_FAIL,

  PDH_PUT,
  PDH_PUT_SUCCESS,
  PDH_PUT_FAIL,

  PDH_DELETE,
  PDH_DELETE_SUCCESS,
  PDH_DELETE_FAIL,

  PDH_CTDH,
  PDH_CTDH_SUCCESS,
  PDH_CTDH_FAIL,

  PDH_GET,
  PDH_GET_SUCCESS,
  PDH_GET_FAIL,

  PDH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function phieudathang(state = initialState, action = {}){
  switch (action.type){
    case PDH_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case PDH_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: action.result.items,
        paging: action.result.paging
      };
    case PDH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: {},
        error: action.error
      };

    case PDH_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case PDH_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case PDH_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: {},
        error: action.error
      };

    case PDH_GET:
      return {
        ...state,
        getding: true
      };
    case PDH_GET_SUCCESS:
      console.log("success");
      return {
        ...state,
        getding: false,
        editItem: action.result,
        ctdh: action.result.chitietdonhang
      };
    case PDH_GET_FAIL:
      console.log("success");
      return {
        ...state,
        getding: false,
        editItem: null,
        error: action.result
      };

    case PDH_POST:
      return {
        ...state,
        posting: true
      };
    case PDH_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case PDH_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PDH_PUT:
      return {
        ...state,
        posting: true
      };
    case PDH_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case PDH_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case PDH_DELETE:
      return {
        ...state,
        deleting: true
      };
    case PDH_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case PDH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };
    case PDH_CTDH:
      return {
        ...state,
        postingCTDH: true
      };
    case PDH_CTDH_SUCCESS:
      return {
        ...state,
        postingCTDH: false,
        ctdh: action.result,
      };
    case PDH_CTDH_FAIL:
      return {
        ...state,
        postingCTDH: false,
        ctdh: null,
        errorPost: action.result
      };
    case PDH_RESET:
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
