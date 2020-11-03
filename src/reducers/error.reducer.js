import {
  GET_ERRORS,
  CLEAR_LOG_ERRORS,
  CLEAR_REG_ERRORS,
  SET_LOG_ERRORS,
  SET_REG_ERRORS,
} from '../actions';

const initialState = {
  logErrors: {},
  regErrors: {},
  errors: {},
};

const error = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case CLEAR_LOG_ERRORS:
      return {
        ...state,
        logErrors: {},
      };
    case CLEAR_REG_ERRORS:
      return {
        ...state,
        regErrors: {},
      };
    case SET_LOG_ERRORS:
      return {
        ...state,
        logErrors: {
          ...state.logErrors,
          [action.id]: action.value,
        },
      };
    case SET_REG_ERRORS:
      return {
        ...state,
        regErrors: {
          ...state.regErrors,
          [action.id]: action.value,
        },
      };
    default:
      return state;
  }
};

export default error;
