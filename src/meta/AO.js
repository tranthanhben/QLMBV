export function ATO(array){
  if(!array instanceof Array){
    return {};
  }
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[i] = array[i];
  };
  return obj;
}
export function OTA(obj){
  if(!obj instanceof Object){
    return [];
  }
  let array = [];
  for (let key in obj) {
    a.push(obj[key]);
  };
  return array;
}
export function ATOLV(array){
  if(!array instanceof Array){
    return {};
  }
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i].id] = array[i];
  };
  return obj;
}
