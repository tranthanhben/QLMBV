import {
  TK_NX_LOAD,
  TK_NX_LOAD_SUCCESS,
  TK_NX_LOAD_FAIL,

} from 'actions/actionTypes';

const initialState = {
  loaded: false
}

export default function thongke(state = initialState, action = {}){
  switch (action.type){
    case TK_NX_LOAD:
      return {
        ...state,
        loading: true
      };
    case TK_NX_LOAD_SUCCESS:
      return {
        ...state,
        loadding: false,
        reloadList: false,
        loaded: true,
        listNX: action.result
      };
    case TK_NX_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        listNX: [],
        paging: null,
        error: action.result
      };
    default:
      return state;
  }
}
