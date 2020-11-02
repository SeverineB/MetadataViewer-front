import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import register from './register.reducer';
import image from './image.reducer';
import error from './error.reducer';

export default combineReducers({
  user,
  auth,
  register,
  image,
  error,
});
