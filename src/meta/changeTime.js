import datetime from './datetime';

function swap(time) {
  var r = time.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
  return r[2] + "-" + r[3] + "-" + r[1] + r[4];
}
/**
  parse json data =>send for server
**/
export function changeITD(time) {
  if(/-/.test(time)){
    var r = time.split("-");
    return JSON.stringify(new Date(r[2], r[1] - 1, r[0]));
  }
  return time;

}
export function parseDate(time) {
  if (!time)
    return new Date();
  return new Date(time);
}
function addZero(r) {
  if (parseInt(r[0]) < 10)
    r[0] = "0" + r[0];
  if (parseInt(r[1]) < 10)
    r[1] = "0" + r[1];
  if (parseInt(r[2]) < 10)
    r[2] = "0" + r[2];
  if (parseInt(r[2]) < 100)
    r[2] = "0" + r[2];
  if (parseInt(r[2]) < 1000)
    r[2] = "0" + r[2];
  return r;
}
/**
  "3/19/2015" => "2015-03-19"
**/
export function changeDTI(time) {
  if(/\//.test(time)){
    var r = time.split("/");
    r = addZero(r);
    return r[2] + "-" + r[0] + "-" + r[1];
  }
  return time;

}
export function reveserChangeDTI(time){
  if(/-/.test(time)){
    var r = time.split("-");
    return r[1] + "-" + r[2] + "-" + r[0];
  }
  return time
}
export function formatDate(n) {
  var r = datetime(n).split("/");
  r = addZero(r);
  return r[1] + "/" + r[0] + "/" + r[2];
}
