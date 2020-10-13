// ACTION TYPES

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_CONNECTED = 'USER_CONNECTED';
export const CHECK_IF_LOGGED = 'CHECK_IF_LOGGED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';

// ACTION CREATOR

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIfLogged = () => ({
  type: CHECK_IF_LOGGED,
});

export const userConnected = (isLogged) => ({
  type: USER_CONNECTED,
  isLogged,
});

export const userDisconnected = (isDisconnected) => ({
  type: USER_DISCONNECTED,
  isDisconnected,
});
