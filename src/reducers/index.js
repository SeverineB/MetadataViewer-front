import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import upload from './upload.reducer';
import error from './error.reducer';

export default combineReducers({
  user,
  auth,
  upload,
  error,
});
