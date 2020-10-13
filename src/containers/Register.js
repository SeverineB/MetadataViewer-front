import { connect } from 'react-redux';

import Register from '../components/Register/Register';

import { changeUserField } from '../actions';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  username: state.auth.username,
  isLogged: state.auth.isLogged,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
