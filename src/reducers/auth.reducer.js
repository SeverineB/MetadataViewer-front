import {
  LOGIN,
  LOGOUT,
  SAVE_USER,
  USER_CONNECTED,
  USER_DISCONNECTED,
} from '../actions';

const initialState = {
  session: {},
  id: null,
  loading: false,
  isLogged: false,
  isDisconnected: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        loading: true,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        session: {
          ...state.session,
          _id: action.sessionId,
          username: action.sessionUsername,
        },
      };
    case USER_CONNECTED:
      return {
        ...state,
        isLogged: action.isLogged,
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
