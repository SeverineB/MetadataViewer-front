import {
  CHANGE_USER_FIELD,
} from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  showAlert: true,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default user;
