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

  GD_DEL_CTDH,
  GD_DEL_CTDH_SUCCESS,
  GD_DEL_CTDH_FAIL,

  GD_POST,
  GD_POST_SUCCESS,
  GD_POST_FAIL,

  GD_PUT,
  GD_PUT_SUCCESS,
  GD_PUT_FAIL,

} from './actionTypes';

export function loadKH(){
  return {
    types: [GD_LISTKH, GD_LISTKH_SUCCESS, GD_LISTKH_FAIL],
    promise: (client) => client.get('/khach_hang',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: '',
        sort:'ten'
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
        sort:'ten'
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
        sort:'ten'
      })
    })
  };
}
export function postGD(data, kind){
  if(data.id){
    return {
      types: [GD_PUT, GD_PUT_SUCCESS, GD_PUT_FAIL],
      promise: (client) => client.put(`/giaodich/${kind}/${data.id}`, {
        data: JSON.stringify(data)
      })
    };
  }
  return {
    types: [GD_POST, GD_POST_SUCCESS, GD_POST_FAIL],
    promise: (client) => client.post(`/giaodich/${kind}`, {
      data: JSON.stringify(data)
    })
  };
}

export function delCTDH(id){
  return {
    types: [GD_DEL_CTDH, GD_DEL_CTDH_SUCCESS, GD_DEL_CTDH_FAIL],
    promise: (client) => client.del('/chi_tiet_don_hang/'+ id)
  };
}
export function isLoaded(globalState) {
  return globalState.giaodich && globalState.giaodich.loaded;
}
