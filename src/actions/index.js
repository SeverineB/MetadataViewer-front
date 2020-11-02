export * from './image.actions';
export * from './user.actions';
export * from './auth.actions';
export * from './error.actions';

// ACTION TYPES

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const CHANGE_USER_FIELD_REGISTER = 'CHANGE_USER_FIELD_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

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

export const changeUserFieldRegister = (value, name) => ({
  type: CHANGE_USER_FIELD_REGISTER,
  value,
  name,
});

export const registerSuccess = (isSignedUp) => ({
  type: REGISTER_SUCCESS,
  isSignedUp,
});

export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error,
});
