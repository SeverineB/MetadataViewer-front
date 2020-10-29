import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm/RegisterForm';

import { changeUserFieldRegister, register } from '../actions';

const mapStateToProps = (state) => ({
  username: state.register.username,
  email: state.register.email,
  password: state.register.password,
  isSignedUp: state.register.isSignedUp,
  error: state.register.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserFieldRegister: (value, name) => {
    dispatch(changeUserFieldRegister(value, name));
  },
  register: () => {
    dispatch(register());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
