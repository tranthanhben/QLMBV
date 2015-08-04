import {
  ME_LOAD,
  ME_LOAD_SUCCESS,
  ME_LOAD_FAIL,
} from '../actions/actionTypes';

const initialState = {
  loaded: false
};
export default function user(state = initialState, action = {}) {
    switch (action.type) {
      case ME_LOAD:
        return {
          ...state,
          loadingUser: true
        };
      case ME_LOAD_SUCCESS:
        return {
          ...state,
          loadingUser: false,
          loaded: true,
          user: action.result
        };
      case ME_LOAD_FAIL:
        return {
          ...state,
          loadingUser: false,
          loaded: true,
          user: null,
          errorUser: action.error
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.user && globalState.user.loaded;
}
