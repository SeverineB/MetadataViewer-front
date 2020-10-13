// ACTION TYPES

export const GET_ERRORS = 'GET_ERRORS';


// ACTION CREATORS

export const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors,
});
