// ACTION TYPES

export const GET_ERRORS = 'GET_ERRORS';
export const SET_ERRORS = 'SET_ERRORS';

// ACTION CREATORS

export const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors,
});

export const setErrors = (id, value) => ({
  type: SET_ERRORS,
  id,
  value,
});
