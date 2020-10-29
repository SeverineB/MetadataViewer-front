import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import register from './register.reducer';
import upload from './upload.reducer';
import error from './error.reducer';

export default combineReducers({
  user,
  auth,
  register,
  upload,
  error,
});
