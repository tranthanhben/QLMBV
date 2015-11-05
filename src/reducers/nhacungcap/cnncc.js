import {
  CNNCC_LIST_LOAD,
  CNNCC_LIST_LOAD_SUCCESS,
  CNNCC_LIST_LOAD_FAIL,

  CNNCC_ONE_LOAD,
  CNNCC_ONE_LOAD_SUCCESS,
  CNNCC_ONE_LOAD_FAIL,

  CNNCC_POST,
  CNNCC_POST_SUCCESS,
  CNNCC_POST_FAIL,

  CNNCC_PUT,
  CNNCC_PUT_SUCCESS,
  CNNCC_PUT_FAIL,

  CNNCC_DELETE,
  CNNCC_DELETE_SUCCESS,
  CNNCC_DELETE_FAIL,

  CNNCC_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function congnoNCC(state = initialState, action = {}){
  switch (action.type){
    case CNNCC_LIST_LOAD:
      return {
        ...state,
        loading: true
      };
    case CNNCC_LIST_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        loaded: true,
        list: actions.result.items,
        paging: action.result.pagding
      };
    case CNNCC_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
      };

    case CNNCC_ONE_LOAD:
      return {
        ...state,
        loadingOne: true
      };
    case CNNCC_ONE_LOAD_SUCCESS:
      return {
        ...state,
        loadingOne: false,
        item: action.result
      };
    case CNNCC_ONE_LOAD_FAIL:
      return {
        ...state,
        loadingOne: false,
        item: null,
        error: action.error
      };

    case CNNCC_POST:
      return {
        ...state,
        posting: true
      };
    case CNNCC_POST_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        reloadList: true,
        message: true,
        posting: false,
      };
    case CNNCC_POST_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case CNNCC_PUT:
      return {
        ...state,
        posting: true
      };
    case CNNCC_PUT_SUCCESS:
      return {
        ...state,
        reset: true,
        editItem: action.result,
        message: true,
        posting: false,
      };
    case CNNCC_PUT_FAIL:
      return {
        ...state,
        editItem: null,
        message: false,
        posting: false,
        errorPost: action.error
      };

    case CNNCC_DELETE:
      return {
        ...state,
        deleting: true
      };
    case CNNCC_DELETE_SUCCESS:
      return {
        ...state,
        reset: true,
        deleting: false,
        item: null
      };
    case CNNCC_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case CNNCC_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
  }
}
