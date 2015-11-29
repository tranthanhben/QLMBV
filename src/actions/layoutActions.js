import {
  OPEN_MODAL,
  ClOSE_MODAL
} from './actionTypes';

export function openModal(fag){
  if(fag){
    return {
      type: OPEN_MODAL
    }
  }else{
    return {
      type: ClOSE_MODAL
    }
  }

}
