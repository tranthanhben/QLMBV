import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL,
  DEL_JOB,
  DEL_JOB_SUCCESS,
  DEL_JOB_FAIL,
  POST_JOB,
  POST_JOB_SUCCESS,
  POST_JOB_FAIL,
  PUT_JOB,
  PUT_JOB_SUCCESS,
  PUT_JOB_FAIL,
  GET_JOB,
  GET_JOB_SUCCESS,
  GET_JOB_FAIL,
  RESETJOB
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
      case DEL_JOB:
        return {
          ...state,
          loadingOne: true
        };
      case DEL_JOB_SUCCESS:
        return {
          ...state,
          reloadList: true,
          loadingOne: false,
          item: null
        };
      case DEL_JOB_FAIL:
        return {
          ...state,
          loadingOne: false,
          item: null,
          errorDel: action.error
        };
      case POST_JOB:
        return {
          ...state,
          postLoading: true
        };
      case POST_JOB_SUCCESS:
        alert("Create Success!");
        location.assign("/job/"+action.result.id);
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case POST_JOB_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostItem: action.error
        };
      case PUT_JOB:
        return {
          ...state,
          postLoading: true
        };
      case PUT_JOB_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case PUT_JOB_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostItem: action.error
        };
      case GET_JOB:
        return {
          ...state,
          getLoading: true
        };
      case GET_JOB_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          getLoading: false,
        };
      case GET_JOB_FAIL:
        return {
          ...state,
          editItem: null,
          getLoading: false,
          errorGetItem: action.error
        }
      case RESETJOB:
        return {
          ...state,
          loaded: false,
          editItem: null,
          message: false,
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
