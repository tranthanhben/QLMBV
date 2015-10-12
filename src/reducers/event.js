import {
  LISTEVENT_LOAD,
  LISTEVENT_LOAD_SUCCESS,
  LISTEVENT_LOAD_FAIL,
  ONEEVENT_LOAD,
  ONEEVENT_LOAD_SUCCESS,
  ONEEVENT_LOAD_FAIL,
  DEL_EVENT,
  DEL_EVENT_SUCCESS,
  DEL_EVENT_FAIL,
  POST_EVENT,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAIL,
  PUT_EVENT,
  PUT_EVENT_SUCCESS,
  PUT_EVENT_FAIL,
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  RESETEVENT
} from '../actions/actionTypes';
const metaEvent = {
    "title": {
        "label": "Title",
        "name": "title",
        "required": true,
        "type": "single"
    },
    "avatar": {
        "label": "Avatar",
        "name": "avatar",
        "required": true,
        "type": "single"
    },
    "location": {
        "label": "Location",
        "name": "location",
        "required": false,
        "type": "single"
    },
    "time": {
        "label": "Time",
        "name": "time",
        "required": false,
        "type": "date"
    },
    "description": {
        "label": "Description",
        "name": "description",
        "required": true,
        "type": "md"
    },
    "content": {
        "label": "Content",
        "name": "content",
        "required": false,
        "type": "md"
    },
    "tag":{
      "label": "Tags",
      "name": "tag",
      "required": false,
      "type": "multiselect"
    }
}

const initialState = {
  loaded: false,
  metaEvent: metaEvent
};
export default function event(state = initialState, action = {}) {
    switch (action.type) {
      case LISTEVENT_LOAD:
        return {
          ...state,
          loadingList: true
        };
      case LISTEVENT_LOAD_SUCCESS:
        return {
          ...state,
          loadingList: false,
          reloadList: false,
          loaded: true,
          list: action.result.items,
          paging: action.result.paging
        };
      case LISTEVENT_LOAD_FAIL:
        return {
          ...state,
          loadingList: false,
          loaded: false,
          list:[],
          paging:null,
          error: action.error
        };
      case ONEEVENT_LOAD:
        return {
          ...state,
          loadingOne: true
        };
      case ONEEVENT_LOAD_SUCCESS:
        return {
          ...state,
          loadingOne: false,
          item: action.result
        };
      case ONEEVENT_LOAD_FAIL:
        return {
          ...state,
          loadingOne: false,
          item:null,
          error: action.error
        };
      case DEL_EVENT:
        return {
          ...state,
          loadingOne: true
        };
      case DEL_EVENT_SUCCESS:
        return {
          ...state,
          reloadList: true,
          loadingOne: false,
          item: null
        };
      case DEL_EVENT_FAIL:
        return {
          ...state,
          loadingOne: false,
          item: null,
          errorDel: action.error
        };
      case POST_EVENT:
        return {
          ...state,
          postLoading: true
        };
      case POST_EVENT_SUCCESS:
        alert("Create Success!");
        location.assign("/event/"+action.result.id);
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case POST_EVENT_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostEvent: action.error
        };
      case PUT_EVENT:
        return {
          ...state,
          postLoading: true
        };
      case PUT_EVENT_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          reloadList: true,
          message: true,
          postLoading: false,
        };
      case PUT_EVENT_FAIL:
        return {
          ...state,
          editItem: null,
          message: false,
          postLoading: false,
          errorPostEvent: action.error
        };
      case GET_EVENT:
        return {
          ...state,
          getLoading: true
        };
      case GET_EVENT_SUCCESS:
        return {
          ...state,
          editItem: action.result,
          getLoading: false,
        };
      case GET_EVENT_FAIL:
        return {
          ...state,
          editItem: null,
          getLoading: false,
          errorGetEvent: action.error
        }
      case RESETEVENT:
        return {
          ...state,
          loaded: false,
          editItem: null,
          message: false,
          errorPostEvent: null,
          errorGetEvent: null
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.event && globalState.event.loaded;
}
