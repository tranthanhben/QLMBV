import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL,
  DEL_ITEM,
  DEL_ITEM_SUCCESS,
  DEL_ITEM_FAIL,
  POST_ITEM,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAIL,
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  RESETDATA
} from '../actions/actionTypes';
const metaJob = {
    "title": {
        "label": "Title",
        "name": "title",
        "required": true,
        "type": "single"
    },
    "salary_min": {
        "label": "Salary Min",
        "name": "salary_min",
        "required": false,
        "type": "number"
    },
    "salary_max": {
        "label": "Salary Max",
        "name": "salary_max",
        "required": false,
        "type": "number"
    },
    "description": {
        "label": "Description",
        "name": "description",
        "required": false,
        "type": "md"
    },
    "location": {
        "label": "Location",
        "name": "location",
        "required": false,
        "type": "single"
    },
    "expired_time": {
        "label": "Expired Time",
        "name": "expired_time",
        "required": false,
        "type": "date"
    },
    "qualification": {
        "label": "Qualification",
        "name": "qualification",
        "required": false,
        "type": "md"
    }
}

const initialState = {
  loaded: false,
  metaJob: metaJob
};
export default function job(state = initialState, action = {}) {
    switch (action.type) {
      case LISTJOB_LOAD:
        return {
          ...state,
          loadingList: true
        };
      case LISTJOB_LOAD_SUCCESS:
        return {
          ...state,
          loadingList: false,
          reloadList: false,
          loaded: true,
          list: action.result.items,
          paging: action.result.paging
        };
      case LISTJOB_LOAD_FAIL:
        return {
          ...state,
          loadingList: false,
          loaded: false,
          list:[],
          paging:null,
          error: action.error
        };
      case ONEJOB_LOAD:
        return {
          ...state,
          loadingOne: true
        };
      case ONEJOB_LOAD_SUCCESS:
        return {
          ...state,
          loadingOne: false,
          item: action.result
        };
      case ONEJOB_LOAD_FAIL:
        return {
          ...state,
          loadingOne: false,
          item:null,
          error: action.error
        };
      case DEL_ITEM:
        return {
          ...state,
          loadingOne: true
        };
      case DEL_ITEM_SUCCESS:
        return {
          ...state,
          reloadList: true,
          loadingOne: false,
          item: null
        };
      case DEL_ITEM_FAIL:
        return {
          ...state,
          loadingOne: false,
          item: null,
          errorDel: action.error
        };
      case POST_ITEM:
        return {
          ...state,
          postLoading: true
        };
      case POST_ITEM_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case POST_ITEM_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostItem: action.error
        };
      case GET_ITEM:
        return {
          ...state,
          getLoading: true
        };
      case GET_ITEM_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          getLoading: false,
        };
      case GET_ITEM_FAIL:
        return {
          ...state,
          editItem: null,
          getLoading: false,
          errorGetItem: action.error
        }
      case RESETDATA:
        return {
          ...state,
          editItem: null,
          errorPostItem: null,
          errorGetItem: null
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.job && globalState.job.loaded;
}
