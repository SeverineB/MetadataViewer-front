import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';

import { logout } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
