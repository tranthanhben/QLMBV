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

  GD_LISTK,
  GD_LISTK_SUCCESS,
  GD_LISTK_FAIL,

  GD_LISTPDH,
  GD_LISTPDH_SUCCESS,
  GD_LISTPDH_FAIL,

  GD_LISTPMH,
  GD_LISTPMH_SUCCESS,
  GD_LISTPMH_FAIL,

  GD_LISTPNH,
  GD_LISTPNH_SUCCESS,
  GD_LISTPNH_FAIL,

  GD_LISTPXH,
  GD_LISTPXH_SUCCESS,
  GD_LISTPXH_FAIL,

  GD_DEL_CTDH,
  GD_DEL_CTDH_SUCCESS,
  GD_DEL_CTDH_FAIL,

  GD_DEL_CTK,
  GD_DEL_CTK_SUCCESS,
  GD_DEL_CTK_FAIL,

  GD_DEL_CTTT,
  GD_DEL_CTTT_SUCCESS,
  GD_DEL_CTTT_FAIL,

  GD_POST,
  GD_POST_SUCCESS,
  GD_POST_FAIL,

  GD_PUT,
  GD_PUT_SUCCESS,
  GD_PUT_FAIL,
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
        errorLoadKH: action.result
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
        errorLoadNCC: action.result
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
        errorLoadLV: action.result
      };
    case GD_LISTK:
      return {
        ...state,
        loadK: true
      };
    case GD_LISTK_SUCCESS:
      return {
        ...state,
        loadK: true,
        listK: action.result.items,
        pagingK: action.result.paging
      };
    case GD_LISTK_FAIL:
      return {
        ...state,
        loadK: true,
        listK: [],
        pagingK: {},
        errorLoadK: action.result
      };
    case GD_LISTPDH:
      return {
        ...state,
        loadPDH: true
      };
    case GD_LISTPDH_SUCCESS:
      return {
        ...state,
        loadPDH: true,
        listPDH: action.result.items,
        pagingPDH: action.result.paging
      };
    case GD_LISTPDH_FAIL:
      return {
        ...state,
        loadPDH: true,
        listPDH: [],
        pagingPDH: {},
        errorLoadPDH: action.result
      };
    case GD_LISTPMH:
      return {
        ...state,
        loadPMH: true
      };
    case GD_LISTPMH_SUCCESS:
      return {
        ...state,
        loadPMH: true,
        listPMH: action.result.items,
        pagingPMH: action.result.paging
      };
    case GD_LISTPMH_FAIL:
      return {
        ...state,
        loadPMH: true,
        listPMH: [],
        pagingPMH: {},
        errorLoadPMH: action.result
      };
      case GD_LISTPNH:
      return {
        ...state,
        loadPNH: true
      };
    case GD_LISTPNH_SUCCESS:
      return {
        ...state,
        loadPNH: true,
        listPNH: action.result.items,
        pagingPNH: action.result.paging
      };
    case GD_LISTPNH_FAIL:
      return {
        ...state,
        loadPNH: true,
        listPNH: [],
        pagingPNH: {},
        errorLoadPNH: action.result
      };
    case GD_LISTPXH:
      return {
        ...state,
        loadPXH: true
      };
    case GD_LISTPXH_SUCCESS:
      return {
        ...state,
        loadPXH: true,
        listPXH: action.result.items,
        pagingPXH: action.result.paging
      };
    case GD_LISTPXH_FAIL:
      return {
        ...state,
        loadPXH: true,
        listPXH: [],
        pagingPXH: {},
        errorLoadPXH: action.result
      };
    case GD_DEL_CTDH:
      return {
        ...state,
        deletingCTDH: true
      };
    case GD_DEL_CTDH_SUCCESS:
      return {
        ...state,
        delCTDH: true
      };
    case GD_DEL_CTDH_FAIL:
      return {
        ...state,
        delCTDH: false,
        errorDel: action.result
      };
    case GD_DEL_CTK:
      return {
        ...state,
        deletingCTK: true
      };
    case GD_DEL_CTK_SUCCESS:
      return {
        ...state,
        delCTK: true
      };
    case GD_DEL_CTK_FAIL:
      return {
        ...state,
        delCTK: false,
        errorDel: action.result
      };
    case GD_DEL_CTTT:
      return {
        ...state,
        deletingCTTT: true
      };
    case GD_DEL_CTTT_SUCCESS:
      return {
        ...state,
        delCTTT: true
      };
    case GD_DEL_CTTT_FAIL:
      return {
        ...state,
        delCTTT: false,
        errorDel: action.result
      };

    case GD_PUT:
      return{
        ...state,
        posting: true
      };
    case GD_PUT_SUCCESS:
      return{
        ...state,
        posting: false,
        gdItem: action.result,
      };
    case GD_PUT_FAIL:
      return{
        ...state,
        posting: false,
        gdItem: null,
        errorPost: action.result
      };
    case GD_POST:
      return{
        ...state,
        posting: true
      };
    case GD_POST_SUCCESS:
      return{
        ...state,
        posting: false,
        gdItem: action.result,
      };
    case GD_POST_FAIL:
      return{
        ...state,
        posting: false,
        gdItem: null,
        errorPost: action.result
      };

    default:
      return state;
  }
}
