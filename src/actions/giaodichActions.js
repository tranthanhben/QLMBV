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

  GD_LISTK,
  GD_LISTK_SUCCESS,
  GD_LISTK_FAIL,

  GD_LISTPDH,
  GD_LISTPDH_SUCCESS,
  GD_LISTPDH_FAIL,

  GD_LISTPMH,
  GD_LISTPMH_SUCCESS,
  GD_LISTPMH_FAIL,

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
export function loadK(){
  return {
    types: [GD_LISTK, GD_LISTK_SUCCESS, GD_LISTK_FAIL],
    promise: (client) => client.get('/kho',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: '',
        sort:'ten'
      })
    })
  };
}
export function loadPDH(){
  return {
    types: [GD_LISTPDH, GD_LISTPDH_SUCCESS, GD_LISTPDH_FAIL],
    promise: (client) => client.get('/giaodich/phieu_dat_hang',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: ''
      })
    })
  };
}
export function loadPMH(){
  return {
    types: [GD_LISTPMH, GD_LISTPMH_SUCCESS, GD_LISTPMH_FAIL],
    promise: (client) => client.get('/giaodich/phieu_mua_hang',{
      params: makeQuery({
        page: 0,
        page_size : 100,
        name: ''
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

export function delCTK(id){
  return {
    types: [GD_DEL_CTK, GD_DEL_CTK_SUCCESS, GD_DEL_CTK_FAIL],
    promise: (client) => client.del('/chi_tiet_kho/'+ id)
  };
}

export function delCTTT(id){
  return {
    types: [GD_DEL_CTTT, GD_DEL_CTTT_SUCCESS, GD_DEL_CTTT_FAIL],
    promise: (client) => client.del('/chi_tiet_thanh_toan/'+ id)
  };
}

export function isLoaded(globalState) {
  return globalState.giaodich && globalState.giaodich.loaded;
}
