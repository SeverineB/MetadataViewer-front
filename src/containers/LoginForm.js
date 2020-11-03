import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm/LoginForm';

import {
  changeUserField,
  setLogErrors,
  clearLogErrors,
  login,
} from '../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLoading: state.auth.isLoading,
  errors: state.error.logErrors,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  login: () => {
    dispatch(login());
  },
  setErrors: (id, value) => {
    dispatch(setLogErrors(id, value));
  },
  clearErrors: () => {
    dispatch(clearLogErrors());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
