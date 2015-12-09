import {makeQuery} from 'meta';
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
} from './actionTypes';

export function loadKH(){
  return {
    types: [GD_LISTKH, GD_LISTKH_SUCCESS, GD_LISTKH_FAIL],
    promise: (client) => client.get('/khach_hang',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: '',
        sort:'name'
      })
    })
  };
}
export function loadNCC(){
  return {
    types: [GD_LISTNCC, GD_LISTNCC_SUCCESS, GD_LISTNCC_FAIL],
    promise: (client) => client.get('/nha_cung_cap',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: '',
        sort:'name'
      })
    })
  };
}
export function loadLV(){
  return {
    types: [GD_LISTLV, GD_LISTLV_SUCCESS, GD_LISTLV_FAIL],
    promise: (client) => client.get('/loai_vai',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: '',
        sort:'name'
      })
    })
  };
}
export function isLoaded(globalState) {
  return globalState.giaodich && globalState.giaodich.loaded;
}
