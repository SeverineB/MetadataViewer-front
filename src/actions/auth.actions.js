// ACTION TYPES

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CHECK_IF_LOGGED = 'CHECK_IF_LOGGED';
export const LOGOUT = 'LOGOUT';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';

// ACTION CREATOR

export const register = () => ({
  type: REGISTER,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error,
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const checkIfLogged = () => ({
  type: CHECK_IF_LOGGED,
});

export const logout = () => ({
  type: LOGOUT,
});

export const userDisconnected = () => ({
  type: USER_DISCONNECTED,
});
