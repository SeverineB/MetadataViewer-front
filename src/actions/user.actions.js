/* eslint-disable no-underscore-dangle */
// ACTION TYPES

export const SAVE_USER = 'SAVE_USER';
export const SAVE_LOGGED = 'SAVE_LOGGED';

// ACTION CREATOR

export const saveUser = ({ session, isLogged }) => ({
  type: SAVE_USER,
  isLogged,
  sessionId: session._id,
  sessionUsername: session.username,
});
