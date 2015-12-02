import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './actionTypes';

export function openModal(fag){
  if(fag){
    return {
      type: OPEN_MODAL
    };
  }else{
    return {
      type: CLOSE_MODAL
    };
  }
}
