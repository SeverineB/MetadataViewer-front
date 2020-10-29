import {
  REGISTER,
  CHANGE_USER_FIELD_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  loading: true,
  isSignedUp: false,
  error: {},
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD_REGISTER:
      return {
        ...state,
        [action.name]: action.value,
      };
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSignedUp: true,
        loading: false,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default user;
