import {
  LISTJOB_LOAD,
  LISTJOB_LOAD_SUCCESS,
  LISTJOB_LOAD_FAIL,
  ONEJOB_LOAD,
  ONEJOB_LOAD_SUCCESS,
  ONEJOB_LOAD_FAIL
} from '../actions/actionTypes';

const initialState = {
  loaded: false
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
        }
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
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.job && globalState.job.loaded;
}
