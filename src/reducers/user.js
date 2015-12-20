import {
  ME_LOAD,
  ME_LOAD_SUCCESS,
  ME_LOAD_FAIL,

  GET_ACCOUNT,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAIL,

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
          errorUser: action.error
        }
      case GET_ACCOUNT:
        return {
          ...state,
          getingAccount: true
        };
      case GET_ACCOUNT_SUCCESS:
        return {
          ...state,
          getingAccount: false,
          account: action.result.items[0] || null
        };
      case GET_ACCOUNT_FAIL:
        return {
          ...state,
          getingAccount: false,
          account: null,
          errorGetAccount: action.error
        }
      case REGISTER_LOAD:
        return {
          ...state,
          registing: true
        };
      case REGISTER_LOAD_SUCCESS:
        return {
          ...state,
          registing: false,
          account: action.result
        };
      case REGISTER_LOAD_FAIL:
        return {
          ...state,
          registing: false,
          account: null,
          registerError: action.result
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
          errorCP: action.error
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
          errorLogin: action.error
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
          errorLogout: action.error
        }
      default:
        return state;
    }
}

export function isLoaded(globalState){
  return globalState.user && globalState.user.loaded;
}
