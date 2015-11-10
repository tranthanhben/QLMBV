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
        list: actions.result.items,
        paging: action.result.pagding
      };
    case PDH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
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
        item: null,
        error: action.error
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

    case PDH_RESET:
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
