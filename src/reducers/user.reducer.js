import {
  CHANGE_USER_FIELD,
  REDIRECT_HOME,

} from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  loading: false,
  redirectHome: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case REDIRECT_HOME:
      return {
        ...state,
        redirectHome: action.redirectHome,
      };
    default:
      return state;
  }
};

export default user;
