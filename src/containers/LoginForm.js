import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm/LoginForm';

import { changeUserField, login } from '../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);