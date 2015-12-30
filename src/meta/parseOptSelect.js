export function parseOptTen(array=[]){
  if(!array instanceof Array){
    return [];
  }
  let  arr = [];
  array.map(a =>{
    let obj ={
      label: a.ten || '',
      value: a.id || ''
    }
    arr.push(obj);
  });
  return arr;
}
export function parseOptId(array=[]){
  if(!array instanceof Array){
    return [];
  }
  let  arr = [];
  array.map(a =>{
    let obj ={
      label: a.id || '',
      value: a.id || ''
    }
    arr.push(obj);
  });
  return arr;
}
