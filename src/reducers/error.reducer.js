import {
  GET_ERRORS,
  SET_ERRORS,
} from '../actions';

const initialState = {
  errors: {},
  formErrors: {},
};

const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case SET_ERRORS:
      return {
        ...state,
        formErrors: {
          ...state.formErrors,
          formErrors: action.formErrors,
          /* [action.id]: action.value, */
        },
      };
    default:
      return state;
  }
};

export default errorReducer;
