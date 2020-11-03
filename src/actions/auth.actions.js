// ACTION TYPES

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const USER_CONNECTED = 'USER_CONNECTED';
export const CHECK_IF_LOGGED = 'CHECK_IF_LOGGED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';

// ACTION CREATOR

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = (isLogged) => ({
  type: LOGIN_SUCCESS,
  isLogged,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const register = () => ({
  type: REGISTER,
});

export const registerSuccess = (isSignedUp) => ({
  type: REGISTER_SUCCESS,
  isSignedUp,
});

export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIfLogged = () => ({
  type: CHECK_IF_LOGGED,
});

export const userDisconnected = () => ({
  type: USER_DISCONNECTED,
});
