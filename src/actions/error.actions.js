// ACTION TYPES

export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_LOG_ERRORS = 'CLEAR_LOG_ERRORS';
export const CLEAR_REG_ERRORS = 'CLEAR_REG_ERRORS';
export const SET_LOG_ERRORS = 'SET_LOG_ERRORS';
export const SET_REG_ERRORS = 'SET_REG_ERRORS';

// ACTION CREATORS

export const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors,
});

export const clearLogErrors = () => ({
  type: CLEAR_LOG_ERRORS,
});

export const clearRegErrors = () => ({
  type: CLEAR_REG_ERRORS,
});

export const setLogErrors = (id, value) => ({
  type: SET_LOG_ERRORS,
  id,
  value,
});

export const setRegErrors = (id, value) => ({
  type: SET_REG_ERRORS,
  id,
  value,
});
