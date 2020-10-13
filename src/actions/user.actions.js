/* eslint-disable no-underscore-dangle */
// ACTION TYPES

export const REGISTER = 'REGISTER';
export const REDIRECT_HOME = 'REDIRECT_HOME';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_LOGGED = 'SAVE_LOGGED';

// ACTION CREATOR

export const register = () => ({
  type: REGISTER,
});

export const redirectHome = (value) => ({
  type: REDIRECT_HOME,
  redirectHome: value,
});

export const saveUser = ({ session, isLogged }) => ({
  type: SAVE_USER,
  isLogged,
  sessionId: session._id,
  sessionUsername: session.username,
});
