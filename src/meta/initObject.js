import datetime from './datetime';
import {changeDTI} from './changeTime';

export default function initObject(meta) {
  let newObj = {};
  for (var key in meta) {
    if (meta[key].type ==="special" || meta[key].field === false){
      continue;
    }
    switch (meta[key].type) {
    case 'bool':
      newObj[key] = false;
      break;
    case 'number':
      newObj[key] = 0;
      break;
    case 'date':
      newObj[key] = changeDTI(datetime(new Date()));
      break;
    case 'array':
      newObj[key] = [];
      break;
    case 'object':
      newObj[key] = initObject(meta[key].children);
      break;
    default:
      newObj[key] = '';
      break;
    }
  }
  return newObj;
}
