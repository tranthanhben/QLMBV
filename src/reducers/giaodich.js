import {
  GD_LISTKH,
  GD_LISTKH_SUCCESS,
  GD_LISTKH_FAIL,

  GD_LISTNCC,
  GD_LISTNCC_SUCCESS,
  GD_LISTNCC_FAIL,

  GD_LISTLV,
  GD_LISTLV_SUCCESS,
  GD_LISTLV_FAIL,
} from 'actions/actionTypes';
const initialState = {
  loadKH: false,
  loadNCC: false,
  loadLv: false
}

export default function loaivai(state = initialState, action = {}){
  switch (action.type){
    case GD_LISTKH:
      return {
        ...state,
        loadKH: true
      };
    case GD_LISTKH_SUCCESS:
      return {
        ...state,
        loadKH: true,
        listKH: action.result.items,
        pagingKH: action.result.paging
      };
    case GD_LISTKH_FAIL:
      return {
        ...state,
        loadKH: true,
        listKH: [],
        pagingKH: {},
        errorLoadKH: action.error
      };
    case GD_LISTNCC:
      return {
        ...state,
        loadNCC: true
      };
    case GD_LISTNCC_SUCCESS:
      return {
        ...state,
        loadNCC: true,
        listNCC: action.result.items,
        pagingNCC: action.result.paging
      };
    case GD_LISTNCC_FAIL:
      return {
        ...state,
        loadNCC: true,
        listNCC: [],
        pagingNCC: {},
        errorLoadNCC: action.error
      };
    case GD_LISTLV:
      return {
        ...state,
        loadLV: true
      };
    case GD_LISTLV_SUCCESS:
      return {
        ...state,
        loadLV: true,
        listLV: action.result.items,
        pagingLV: action.result.paging
      };
    case GD_LISTLV_FAIL:
      return {
        ...state,
        loadLV: true,
        listLV: [],
        pagingLV: {},
        errorLoadLV: action.error
      };
    default:
      return state;
  }
}
