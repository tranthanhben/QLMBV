import {makeQuery,changeDTI, datetime, reveserChangeDTI, startMonth, endMonth, getMonth, getYear} from 'meta';
import {
  TK_NX_LOAD,
  TK_NX_LOAD_SUCCESS,
  TK_NX_LOAD_FAIL,
  TK_TC_LOAD,
  TK_TC_LOAD_SUCCESS,
  TK_TC_LOAD_FAIL
} from './actionTypes';

export function loadNX(options = {}){
  let opt = {...options};
  if(opt.loai === 'month'){
    opt.start = startMonth(opt.start);
    opt.end = endMonth(opt.end);
  }
  if(opt.loai === 'year'){
    opt.start = opt.start? opt.start +"-01-01": getYear(changeDTI(datetime(new Date())))+"-01-01";
    opt.end = opt.end? opt.end +"-12-31": getYear(changeDTI(datetime(new Date())))+"-12-31";
  }
  let start = reveserChangeDTI(changeDTI(datetime(opt.start || new Date())));
  let end = reveserChangeDTI(changeDTI(datetime(opt.end || new Date())));
  return {
    types: [TK_NX_LOAD, TK_NX_LOAD_SUCCESS, TK_NX_LOAD_FAIL],
    promise: (client) => client.get('/statistics/chitietkho',{
      params: makeQuery({
        start: start,
        end : end,
        period: opt.period || 'day'
      })
    })
  };
}
export function loadTC(options = {}){
  let opt = {...options};
  if(opt.loai === 'month'){
    opt.start = startMonth(opt.start);
    opt.end = endMonth(opt.end);
  }
  if(opt.loai === 'year'){
    opt.start = opt.start? opt.start +"-01-01": getYear(changeDTI(datetime(new Date())))+"-01-01";
    opt.end = opt.end? opt.end +"-12-31": getYear(changeDTI(datetime(new Date())))+"-12-31";
  }
  let start = reveserChangeDTI(changeDTI(datetime(opt.start || new Date())));
  let end = reveserChangeDTI(changeDTI(datetime(opt.end || new Date())));
  return {
    types: [TK_TC_LOAD, TK_TC_LOAD_SUCCESS, TK_TC_LOAD_FAIL],
    promise: (client) => client.get('/statistics/chitietthanhtoan',{
      params: makeQuery({
        start: start,
        end : end,
        period: opt.period || 'day'
      })
    })
  };
}

export function isLoaded(globalState) {
  return globalState.thong_ke && globalState.thong_ke.loaded;
}
//?start=mm-dd-yyyy&end=mm-dd-yyy&period=day|month|year
