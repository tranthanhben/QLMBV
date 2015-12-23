export default function parseOptSelect(array=[]){
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
