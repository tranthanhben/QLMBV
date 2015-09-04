import {
  LIST_APPLY_LOAD,
  LIST_APPLY_LOAD_SUCCESS,
  LIST_APPLY_LOAD_FAIL,
  ONE_APPLY_LOAD,
  ONE_APPLY_LOAD_SUCCESS,
  ONE_APPLY_LOAD_FAIL,
  DEL_APPLY,
  DEL_APPLY_SUCCESS,
  DEL_APPLY_FAIL,
  POST_APPLY,
  POST_APPLY_SUCCESS,
  POST_APPLY_FAIL,
  PUT_APPLY,
  PUT_APPLY_SUCCESS,
  PUT_APPLY_FAIL,
  GET_APPLY,
  GET_APPLY_SUCCESS,
  GET_APPLY_FAIL,
  RESET_APPLY
} from '../actions/actionTypes';
const metaApply = {
    "title": {
        "label": "Title",
        "name": "title",
        "required": true,
        "type": "single"
    },
    "cv": {
        "label": "CV",
        "name": "cv",
        "required": true,
        "type": "single"
    },
    "phone": {
        "label": "Phone",
        "name": "phone",
        "required": true,
        "type": "single"
    },
    "letter": {
        "label": "Letter",
        "name": "letter",
        "required": false,
        "type": "md"
    }
}

const initialState = {
  loaded: false,
  metaApply: metaApply
};
export default function apply(state = initialState, action = {}) {
    switch (action.type) {
      case LIST_APPLY_LOAD:
        return {
          ...state,
          loadingList: true
        };
      case LIST_APPLY_LOAD_SUCCESS:
        return {
          ...state,
          loadingList: false,
          reloadList: false,
          loaded: true,
          list: action.result.items,
          paging: action.result.paging
        };
      case LIST_APPLY_LOAD_FAIL:
        return {
          ...state,
          loadingList: false,
          loaded: false,
          list:[],
          paging:null,
          error: action.error
        };
      case ONE_APPLY_LOAD:
        return {
          ...state,
          loadingOne: true
        };
      case ONE_APPLY_LOAD_SUCCESS:
        return {
          ...state,
          loadingOne: false,
          item: action.result
        };
      case ONE_APPLY_LOAD_FAIL:
        return {
          ...state,
          loadingOne: false,
          item:null,
          error: action.error
        };
      case DEL_APPLY:
        return {
          ...state,
          loadingOne: true
        };
      case DEL_APPLY_SUCCESS:
        return {
          ...state,
          reloadList: true,
          loadingOne: false,
          item: null
        };
      case DEL_APPLY_FAIL:
        return {
          ...state,
          loadingOne: false,
          item: null,
          errorDel: action.error
        };
      case POST_APPLY:
        return {
          ...state,
          postLoading: true
        };
      case POST_APPLY_SUCCESS:
        alert("Create Success!");
        location.assign("/apply/"+action.result.id);
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case POST_APPLY_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostApply: action.error
        };
      case PUT_APPLY:
        return {
          ...state,
          postLoading: true
        };
      case PUT_APPLY_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case PUT_APPLY_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostApply: action.error
        };
      case GET_APPLY:
        return {
          ...state,
          getLoading: true
        };
      case GET_APPLY_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          getLoading: false,
        };
      case GET_APPLY_FAIL:
        return {
          ...state,
          editItem: null,
          getLoading: false,
          errorGetApply: action.error
        }
      case RESET_APPLY:
        return {
          ...state,
          loaded: false,
          editItem: null,
          message: false,
          errorPostApply: null,
          errorGetApply: null
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.apply && globalState.apply.loaded;
}
