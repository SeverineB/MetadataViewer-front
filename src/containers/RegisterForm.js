import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm/RegisterForm';

import { changeUserFieldRegister, setRegErrors, clearRegErrors, register } from '../actions';

const mapStateToProps = (state) => ({
  username: state.register.username,
  email: state.register.email,
  password: state.register.password,
  isSignedUp: state.register.isSignedUp,
  isFailed: state.register.isFailed,
  error: state.register.error,
  loading: state.register.loading,
  errors: state.error.regErrors,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserFieldRegister: (value, name) => {
    dispatch(changeUserFieldRegister(value, name));
  },
  setErrors: (id, value) => {
    dispatch(setRegErrors(id, value));
  },
  clearErrors: () => {
    dispatch(clearRegErrors());
  },
  register: () => {
    dispatch(register());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
