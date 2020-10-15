import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm/LoginForm';

import { changeUserField, setErrors, login } from '../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  loading: state.user.loading,
  errors: state.error.formErrors,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  login: () => {
    dispatch(login());
  },
  setErrors: (value, id) => {
    dispatch(setErrors(value, id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
