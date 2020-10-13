import { connect } from 'react-redux';

import App from '../components/App/App';

import { fetchFiles, checkIfLogged, userConnected } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFiles: () => {
    dispatch(fetchFiles());
  },
  checkIfLogged: () => {
    dispatch(checkIfLogged());
  },
  userConnected: (value) => {
    dispatch(userConnected(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
