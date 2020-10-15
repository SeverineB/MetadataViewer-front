export * from './upload.actions';
export * from './user.actions';
export * from './auth.actions';
export * from './error.actions';

// ACTION TYPES

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
/* export const TOGGLE_SHOW_LOGIN = 'TOGGLE_SHOW_LOGIN';
export const TOGGLE_SHOW_REGISTER = 'TOGGLE_SHOW_REGISTER'; */

// ACTION CREATOR

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const changeUserField = (value, name) => ({
  type: CHANGE_USER_FIELD,
  value,
  name,
});
