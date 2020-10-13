import {
  SET_ERRORS,
} from '../actions';

const initialState = {
  errors: {},
};

const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.id]: action.value,
        },
      };
    default:
      return state;
  }
};

export default errorReducer;
