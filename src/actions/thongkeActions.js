import {makeQuery,changeDTI, datetime, reveserChangeDTI} from 'meta';
import {
  TK_NX_LOAD,
  TK_NX_LOAD_SUCCESS,
  TK_NX_LOAD_FAIL
} from './actionTypes';

export function loadNX(options = {}){
  return {
    types: [TK_NX_LOAD, TK_NX_LOAD_SUCCESS, TK_NX_LOAD_FAIL],
    promise: (client) => client.get('/statistics/chitietkho',{
      params: makeQuery({
        start: options.start || reveserChangeDTI(changeDTI(datetime(new Date()))),
        end : options.end || reveserChangeDTI(changeDTI(datetime(new Date()))),
        period: options.period || 'day'
      })
    })
  };
}

export function isLoaded(globalState) {
  return globalState.thong_ke && globalState.thong_ke.loaded;
}
//?start=mm-dd-yyyy&end=mm-dd-yyy&period=day|month|year
