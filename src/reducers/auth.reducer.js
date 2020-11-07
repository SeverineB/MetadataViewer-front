import {
  LOGIN,
  LOGOUT,
  SAVE_USER,
  USER_DISCONNECTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FINISH_LOADING,
} from '../actions';

const initialState = {
  session: {},
  id: null,
  isLoading: false,
  isLogged: false,
  isFailed: false,
  isDisconnected: false,
  error: {},
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        isLoading: true,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        session: {
          ...state.session,
          id: action.sessionId,
          username: action.sessionUsername,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isLogged: false,
        isFailed: true,
        isLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case USER_DISCONNECTED:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default auth;
