import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  LIST_IMAGE,
  LIST_IMAGE_SUCCESS,
  LIST_IMAGE_FAIL,
} from '../actions/actionTypes';

const initialState = {
};

export default function image(state = initialState, action = {}) {
  switch (action.type){
    case UPLOAD_IMAGE:
      return {
        ...state
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        image_url : action.result.url,
        reloadList: true
      };
    case UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        image_upload_error : action.error
      };
    case LIST_IMAGE:
      return {
        ...state,
        loadingList: true
      };
    case LIST_IMAGE_SUCCESS:
      return {
        ...state,
        loadingList: false,
        reloadList: false,
        list: action.result.items,
        paging: action.result.paging
      };
    case LIST_IMAGE_FAIL:
      return {
        ...state,
        loadingList: false,
        list:[],
        paging:null,
        error: action.error
      };
    default:
      return state;
  }
}
