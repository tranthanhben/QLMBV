import {
  ME_LOAD,
  ME_LOAD_SUCCESS,
  ME_LOAD_FAIL,
  LOGIN_LOAD,
  LOGIN_LOAD_SUCCESS,
  LOGIN_LOAD_FAIL,
  LOGOUT_LOAD,
  LOGOUT_LOAD_SUCCESS,
  LOGOUT_LOAD_FAIL,

  REGISTER_LOAD,
  REGISTER_LOAD_SUCCESS,
  REGISTER_LOAD_FAIL,

  CHANGE_PASS_LOAD,
  CHANGE_PASS_LOAD_SUCCESS,
  CHANGE_PASS_LOAD_FAIL,

  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL

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
          errorUser: action.result
        }
      case CHANGE_PASS_LOAD:
        return {
          ...state,
          changing: true
        }
      case CHANGE_PASS_LOAD_SUCCESS:
        return {
          ...state,
          changing: false,
          messageCP: true
        }
      case CHANGE_PASS_LOAD_FAIL:
        return {
          ...state,
          changing: false,
          messageCP: false,
          errorCP: action.result
        }
      case LOGIN_LOAD:
        return {
          ...state
        };
      case LOGIN_LOAD_SUCCESS:
        location.assign('/sanpham');
        return {
          ...state
        };
      case LOGIN_LOAD_FAIL:
        return {
          ...state,
          errorLogin: action.result
        }
      case LOGOUT_LOAD:
        return {
          ...state
        };
      case LOGOUT_LOAD_SUCCESS:
        location.assign('/login');
        return {
          ...state,
          user: null
        };
      case LOGOUT_LOAD_FAIL:
        return {
          ...state,
          errorLogout: action.result
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.user && globalState.user.loaded;
}
