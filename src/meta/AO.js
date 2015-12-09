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
export function ATO(obj){
  if(!obj instanceof Object){
    return [];
  }
  let array = [];
  for (let key in obj) {
    a.push(obj[key]);
  };
  return array;
}
