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

  PNH_RESET
} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function phieunhaphang(state = initialState, action = {}){
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
        list: actions.result.items,
        paging: action.result.pagding
      };
    case PNH_LIST_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: [],
        paging: null,
        error: action.error
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
        item: null,
        error: action.error
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
        errorPost: action.error
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
        errorPost: action.error
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
        deleting: false,
        item: null
      };
    case PNH_DELETE_FAIL:
      return {
        ...state,
        deleting: false,
        item: null,
        errorDel: action.error
      };

    case PNH_RESET:
      return {
        ...state,
        loaded: false,
        editItem: null,
        massage: false,
        errorPost:null
      };
  }
}
